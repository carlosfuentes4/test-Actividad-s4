using Microsoft.AspNetCore.Mvc;
using ProyectoS4.DTOs;
using ProyectoS4.Services;

namespace ProyectoS4.Controllers;

[ApiController]
[Route("api/users")]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpGet]
    public async Task<IActionResult> GetUsers()
    {
        var users = await _userService.GetAllUsers();
        return Ok(users);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetUserById(string id)
    {
        var user = await _userService.GetUserById(id);
        if (user == null) return NotFound("Usuario no encontrado.");
        return Ok(user);
    }

    [HttpPost]
    public async Task<IActionResult> CreateUser([FromBody] UserDto dto)
    {
        var user = await _userService.CreateUser(dto);
        return Ok(new { message = "Usuario creado", id = user.IdUser });
    }
}
