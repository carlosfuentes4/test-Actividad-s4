using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using ProyectoS4.DTO;
using ProyectoS4.Services;

namespace ProyectoS4.Controllers;

/// <summary>
/// Endpoints de usuarios (gerentes y huéspedes).
/// </summary>
[ApiController]
[Authorize]
[Route("api/users")]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    /// <summary>
    /// GET: api/users
    /// Lista todos los usuarios.
    /// </summary>
    [HttpGet]
    public async Task<IActionResult> GetUsers()
    {
        var users = await _userService.GetAllUsers();
        return Ok(users);
    }

    /// <summary>
    /// GET: api/users/{idUser}
    /// Obtiene un usuario por id.
    /// </summary>
    [HttpGet("{idUser}")]
    public async Task<IActionResult> GetUserById(string idUser)
    {
        var user = await _userService.GetUserById(idUser);
        if (user == null) return NotFound(new { message = "Usuario no encontrado." });
        return Ok(user);
    }

    /// <summary>
    /// POST: api/users
    /// Crea un usuario. Recomendado: huésped por defecto con rol "Invitado".
    /// </summary>
    [HttpPost]
    [AllowAnonymous]
    public async Task<IActionResult> CreateUser([FromBody] UsuarioDto dto)
    {
        var created = await _userService.CreateUser(dto);
        return Ok(new { message = "Usuario creado", id = created.IdUser });
    }
}

