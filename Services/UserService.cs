using Google.Cloud.Firestore;
using ProyectoS4.DTO;
using ProyectoS4.Models;
using BCrypt.Net;

namespace ProyectoS4.Services;

/// <summary>
/// Servicio de dominio para gestionar usuarios en Firestore.
/// Escribe/lee como diccionario para evitar problemas de convertidores con enums y DateTime.
/// </summary>
public class UserService : IUserService
{
    private readonly FirebaseService _firebaseService;
    private readonly ILogger<UserService> _logger;

    public UserService(FirebaseService firebaseService, ILogger<UserService> logger)
    {
        _firebaseService = firebaseService;
        _logger = logger;
    }

    public async Task<List<UsuarioDto>> GetAllUsers()
    {
        var snapshot = await _firebaseService.GetCollection("users").GetSnapshotAsync();
        return snapshot.Documents.Select(FromFirestoreDocument).ToList();
    }

    public async Task<UsuarioDto?> GetUserById(string idUser)
    {
        var docRef = _firebaseService.GetCollection("users").Document(idUser);
        var snapshot = await docRef.GetSnapshotAsync();
        if (!snapshot.Exists) return null;
        return FromFirestoreDocument(snapshot);
    }

    public async Task<UsuarioDto> CreateUser(UsuarioDto dto)
    {
        if (string.IsNullOrWhiteSpace(dto.Correo))
            throw new ArgumentException("El correo es obligatorio.");

        if (string.IsNullOrWhiteSpace(dto.NombreCompleto))
            throw new ArgumentException("El nombre completo es obligatorio.");

        if (string.IsNullOrWhiteSpace(dto.IdUser))
            dto.IdUser = Guid.NewGuid().ToString();

        if (string.IsNullOrWhiteSpace(dto.Contraseña))
            throw new ArgumentException("La contraseña es obligatoria.");

        // Si no viene rol, por defecto: Invitado
        var rol = dto.Rol;

        var correoNormalizado = dto.Correo.Trim().ToLowerInvariant();
        var passwordHash = BCrypt.Net.BCrypt.HashPassword(dto.Contraseña);

        var userToSave = new Dictionary<string, object>
        {
            { "idUser", dto.IdUser },
            { "correo", correoNormalizado },
            { "nombreCompleto", dto.NombreCompleto },
            { "rol", (int)rol },
            { "telefono", dto.Telefono ?? "" },
            { "activo", true },
            { "fechaCreacion", Timestamp.FromDateTime(DateTime.UtcNow) },
            { "fechaActualizacion", null! }, // se creará como null en Firestore
            { "PasswordHash", passwordHash }
        };

        var docRef = _firebaseService.GetCollection("users").Document(dto.IdUser);
        await docRef.SetAsync(userToSave);

        _logger.LogInformation("Usuario creado en Firestore con Id {Id}", dto.IdUser);

        // No devolvemos la contraseña en respuesta
        dto.Contraseña = "";
        dto.Activo = true;
        dto.FechaCreacion = DateTime.UtcNow;
        dto.FechaActualizacion = null;
        return dto;
    }

    private static UsuarioDto FromFirestoreDocument(DocumentSnapshot snapshot)
    {
        var data = snapshot.ToDictionary();

        var id = GetStr(data, "idUser") ?? snapshot.Id;
        var correo = GetStr(data, "correo") ?? GetStr(data, "Correo") ?? "";
        var nombre = GetStr(data, "nombreCompleto") ?? GetStr(data, "NombreCompleto") ?? "";
        var telefono = GetStr(data, "telefono") ?? GetStr(data, "Telefono") ?? "";

        var rolInt = GetInt(data, "rol");
        var rol = (UserRole)rolInt;

        var activo = data.TryGetValue("activo", out var a) && a is bool b ? b : true;
        var fechaCreacion = GetDateTime(data, "fechaCreacion") ?? DateTime.UtcNow;
        var fechaActualizacion = GetDateTime(data, "fechaActualizacion");

        return new UsuarioDto
        {
            IdUser = id,
            Correo = correo,
            NombreCompleto = nombre,
            Rol = rol,
            Telefono = telefono,
            Activo = activo,
            FechaCreacion = fechaCreacion,
            FechaActualizacion = fechaActualizacion,
            Contraseña = "" // no se expone
        };
    }

    private static string? GetStr(Dictionary<string, object> data, string key) =>
        data.TryGetValue(key, out var v) && v is string s ? s : null;

    private static int GetInt(Dictionary<string, object> data, string key)
    {
        if (!data.TryGetValue(key, out var v)) return 0;
        if (v is long l) return (int)l;
        if (v is int i) return i;
        return 0;
    }

    private static DateTime? GetDateTime(Dictionary<string, object> data, string key)
    {
        if (!data.TryGetValue(key, out var v)) return null;
        if (v is Timestamp ts) return ts.ToDateTime();
        return null;
    }
}

