using ProyectoS4.DTO;

namespace ProyectoS4.Services;

public interface IUserService
{
    Task<List<UsuarioDto>> GetAllUsers();
    Task<UsuarioDto?> GetUserById(string idUser);
    Task<UsuarioDto> CreateUser(UsuarioDto dto);
}

