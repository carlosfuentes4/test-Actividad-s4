using ProyectoS4.DTO;
using ProyectoS4.Models;

namespace ProyectoS4.Services;

public class UserService : IUserService
{
    private readonly FirebaseService _firebaseService;

    public UserService(FirebaseService firebaseService)
    {
        _firebaseService = firebaseService;
    }

    public async Task<List<UserDto>> GetAllUsers()
    {
        var snapshot = await _firebaseService.GetCollection("users").GetSnapshotAsync();

        var users = snapshot.Documents
            .Select(doc =>
            {
                var model = doc.ConvertTo<UserModel>();
                var dto = new UserDto
                {
                    IdUser = model.IdUser,
                    FullName = model.NombreCompleto,
                    Email = model.Correo,
                    Rol = model.Rol.ToString(),
                    Telefono = model.Telefono ?? ""
                };
                return dto;
            })
            .ToList();

        return users;
    }

    public async Task<UserDto?> GetUserById(string userId)
    {
        var docRef = _firebaseService.GetCollection("users").Document(userId);
        var snapshot = await docRef.GetSnapshotAsync();

        if (!snapshot.Exists) return null;

        var model = snapshot.ConvertTo<UserModel>();
        var dto = new UserDto
        {
            IdUser = model.IdUser,
            FullName = model.NombreCompleto,
            Email = model.Correo,
            Rol = model.Rol.ToString(),
            Telefono = model.Telefono ?? ""
        };

        return dto;
    }

    public async Task<UserModel> CreateUser(UserDto dto)
    {
        var user = new UserModel
        {
            IdUser = string.IsNullOrWhiteSpace(dto.IdUser) ? Guid.NewGuid().ToString() : dto.IdUser,
            NombreCompleto = dto.FullName,
            Correo = dto.Email,
            Rol = Enum.Parse<UserRole>(dto.Rol),
            Telefono = dto.Telefono,
            FechaCreacion = DateTime.UtcNow,
            FechaActualizacion = null
        };

        var docRef = _firebaseService.GetCollection("users").Document(user.IdUser);
        await docRef.SetAsync(user);

        return user;
    }
}