using Google.Cloud.Firestore;
using Microsoft.AspNetCore.Mvc;
using ProyectoS4.Models;
using ProyectoS4.Services;

namespace ProyectoS4.Controllers;

[ApiController]
[Route("api/users")]
public class UserController : ControllerBase
{
    private readonly FirebaseService _firebaseService;

    public UserController(FirebaseService firebaseService)
    {
        _firebaseService = firebaseService;
    }

    // POST: api/users
    [HttpPost]
    public async Task<IActionResult> CreateUser([FromBody] UserModel user)
    {
        //  Las validaciones las maneja automáticamente el [ApiController]
        user.FechaCreacion = DateTime.UtcNow;

        var docRef = _firebaseService.GetCollection("users").Document(user.IdUser);
        await docRef.SetAsync(user); 
        //  No más Dictionary manual

        return Ok(new { message = "Usuario creado", id = user.IdUser });
    }

    // GET: api/users
    [HttpGet]
    public async Task<IActionResult> GetUsers()
    {
        var snapshot = await _firebaseService.GetCollection("users").GetSnapshotAsync();

        //  No más mapeo manual
        var users = snapshot.Documents
            .Select(doc => doc.ConvertTo<UserModel>())
            .ToList();

        return Ok(users);
    }
}
