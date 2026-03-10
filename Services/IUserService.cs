using ProyectoS4.DTOs;
using ProyectoS4.Models;

namespace ProyectoS4.Services;

public interface IUserService
{
    Task<List<UserDto>> GetAllUsers();        
    // GET todos
    Task<UserDto?> GetUserById(string userId); 
    // GET por id
    Task<UserModel> CreateUser(UserDto dto);   
    // POST crear

    
}
