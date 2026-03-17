using ProyectoS4.DTO;
using ProyectoS4.Models;

namespace ProyectoS4.Services;

public interface IUserService
{
    Task<List<UsuarioDto>> GetAllUsers();
    // GET todos
    Task<UsuarioDto?> GetUserById(string userId);
    // GET por id
    Task<UserModel> CreateUser(UsuarioDto dto);
    // POST crear


}
