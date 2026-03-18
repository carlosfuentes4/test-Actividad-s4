using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using ProyectoS4.Services;
using BCrypt.Net;

namespace ProyectoS4.Controllers;

/// <summary>
/// Autenticación: login por email (busca en Firestore) y genera JWT.
/// </summary>
[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly FirebaseService _firebaseService;
    private readonly IConfiguration _configuration;

    public AuthController(FirebaseService firebaseService, IConfiguration configuration)
    {
        _firebaseService = firebaseService;
        _configuration = configuration;
    }

    /// <summary>
    /// Login: requiere email y password (por ahora no valida BCrypt, pero obliga a enviar la contraseña).
    /// </summary>
    [HttpPost("login")]
    [AllowAnonymous]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        if (string.IsNullOrWhiteSpace(request?.Email))
            return BadRequest(new { message = "El correo es obligatorio." });

        if (string.IsNullOrWhiteSpace(request?.Password))
            return BadRequest(new { message = "La contraseña es obligatoria." });

        var emailRaw = request.Email;
        var email = request.Email.Trim();

        var emailCandidates = new HashSet<string>(StringComparer.Ordinal)
        {
            email,
            emailRaw,
        };

        // Variantes de casing
        emailCandidates.Add(email.ToLowerInvariant());
        emailCandidates.Add(email.ToUpperInvariant());

        // Colectiones con diferentes capitalizaciones (por compatibilidad)
        var collectionCandidates = new[] { "users", "Users" };

        // Campos que podrían almacenar el correo dependiendo de cómo se guardó el usuario.
        var emailFields = new[] { "correo", "Correo", "email", "Email", "EMAIL" };

        Google.Cloud.Firestore.QuerySnapshot snapshot = null!;
        foreach (var collectionName in collectionCandidates)
        {
            foreach (var fieldName in emailFields)
            {
                foreach (var candidateEmail in emailCandidates)
                {
                    snapshot = await _firebaseService
                        .GetCollection(collectionName)
                        .WhereEqualTo(fieldName, candidateEmail)
                        .Limit(1)
                        .GetSnapshotAsync();

                    if (snapshot.Count > 0)
                        break;
                }

                if (snapshot.Count > 0)
                    break;
            }

            if (snapshot.Count > 0)
                break;
        }

        if (snapshot.Count == 0)
            return Unauthorized(new { message = "No existe un usuario con ese correo." });

        var doc = snapshot.Documents[0];
        var data = doc.ToDictionary();

        // Activo: soporta diferentes nombres de campo.
        var activo = GetBool(data, "activo") ?? GetBool(data, "Activo") ?? GetBool(data, "isActive") ?? true;
        if (!activo)
            return Unauthorized(new { message = "Usuario desactivado." });

        // Validar contraseña con BCrypt para que NO se vea en Firestore.
        var passwordHash =
            GetStr(data, "PasswordHash") ??
            GetStr(data, "passwordHash") ??
            GetStr(data, "passwordhash") ??
            GetStr(data, "Passwordhash".ToLowerInvariant()) ??
            GetStr(data, "passwordHash".ToLowerInvariant());

        if (string.IsNullOrWhiteSpace(passwordHash))
            return Unauthorized(new { message = "Email o contraseña incorrectos." });

        if (!BCrypt.Net.BCrypt.Verify(request.Password, passwordHash))
            return Unauthorized(new { message = "Email o contraseña incorrectos." });

        var id =
            GetStr(data, "idUser") ??
            GetStr(data, "IdUser") ??
            GetStr(data, "Id") ??
            doc.Id;

        var correo =
            GetStr(data, "correo") ??
            GetStr(data, "Correo") ??
            GetStr(data, "email") ??
            GetStr(data, "Email") ??
            email;

        var nombre =
            GetStr(data, "nombreCompleto") ??
            GetStr(data, "NombreCompleto") ??
            GetStr(data, "Fullname") ??
            GetStr(data, "FullName") ??
            "";

        var rol = ResolveRole(data);

        var jwtKey = _configuration["Jwt:Key"];
        var jwtIssuer = _configuration["Jwt:Issuer"];
        var jwtAudience = _configuration["Jwt:Audience"];
        var expiresMinutes = _configuration.GetValue<int?>("Jwt:ExpiresMinutes") ?? 60;

        if (string.IsNullOrWhiteSpace(jwtKey) ||
            string.IsNullOrWhiteSpace(jwtIssuer) ||
            string.IsNullOrWhiteSpace(jwtAudience))
        {
            return StatusCode(500, new { message = "Configuración JWT incompleta en appsettings.json." });
        }

        var signingCredentials = new SigningCredentials(
            new SymmetricSecurityKey(Encoding.ASCII.GetBytes(jwtKey)),
            SecurityAlgorithms.HmacSha256
        );

        var expiresAt = DateTime.UtcNow.AddMinutes(expiresMinutes);
        var tokenDescriptor = new JwtSecurityToken(
            issuer: jwtIssuer,
            audience: jwtAudience,
            claims: new List<Claim>
            {
                new(JwtRegisteredClaimNames.Sub, id),
                new(JwtRegisteredClaimNames.Email, correo),
                new Claim("nombreCompleto", nombre),
                new Claim("rol", rol),
                new Claim(ClaimTypes.Role, rol),
            },
            notBefore: DateTime.UtcNow,
            expires: expiresAt,
            signingCredentials: signingCredentials
        );

        var token = new JwtSecurityTokenHandler().WriteToken(tokenDescriptor);

        return Ok(new LoginResponse
        {
            Id = id,
            Email = correo,
            NombreCompleto = nombre,
            Rol = rol,
            Token = token,
            ExpiresAt = expiresAt
        });
    }

    private static string ResolveRole(Dictionary<string, object> data)
    {
        // Soporta rol como int (0/1) o como string ("Manager"/"Invitado").
        var rolStr =
            GetStr(data, "rol") ??
            GetStr(data, "Rol") ??
            GetStr(data, "Role") ??
            GetStr(data, "role");

        if (!string.IsNullOrWhiteSpace(rolStr))
        {
            if (rolStr.Equals("Manager", StringComparison.OrdinalIgnoreCase)) return "Manager";
            if (rolStr.Equals("Invitado", StringComparison.OrdinalIgnoreCase)) return "Invitado";
            return rolStr;
        }

        var rolInt =
            GetInt(data, "rol") ??
            GetInt(data, "Rol") ??
            GetInt(data, "Role") ??
            1;

        return rolInt switch
        {
            0 => "Manager",
            1 => "Invitado",
            _ => "Invitado"
        };
    }

    private static string? GetStr(Dictionary<string, object> data, string key) =>
        data.TryGetValue(key, out var v) && v is string s ? s : null;

    private static int? GetInt(Dictionary<string, object> data, string key)
    {
        if (!data.TryGetValue(key, out var v)) return null;
        if (v is long l) return (int)l;
        if (v is int i) return i;
        return null;
    }

    private static bool? GetBool(Dictionary<string, object> data, string key)
    {
        if (!data.TryGetValue(key, out var v)) return null;
        return v is bool b ? b : null;
    }
}

public class LoginRequest
{
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
}

public class LoginResponse
{
    public string Id { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string NombreCompleto { get; set; } = string.Empty;
    public string Rol { get; set; } = string.Empty;
    public string Token { get; set; } = string.Empty;
    public DateTime ExpiresAt { get; set; }
}

