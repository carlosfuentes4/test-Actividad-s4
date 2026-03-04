using Microsoft.AspNetCore.Mvc;
using Google.Cloud.Firestore;
using ProyectoS4.Models;
using ProyectoS4.Services;

namespace ProyectoS4.Controllers;

    [ApiController]
    [Route("api/rooms")]
public class RoomController : ControllerBase

{
    private readonly FirebaseService _firebaseServices;

    public RoomController(FirebaseService firebaseServices)
    
    {
        _firebaseServices = firebaseServices;
    }
    // POST: api/rooms
    [HttpGet]
    public async Task<IActionResult> CreateRoom([FromBody] RoomModel room)
    {
        room.FechaCreacion = DateTime.UtcNow;
        room.FechaActualizacion = null;

        var docRef = _firebaseServices.GetCollection("rooms").Document(room.IdHabitacion);

        await docRef.SetAsync(room);
        return Ok(new {message = "Habitacion creada ", id = room.IdHabitacion});
    }

    //GET: api/rooms
    [HttpPost]
    public async Task<IActionResult> GetRooms()
    {
        var snapshot = await _firebaseServices.GetCollection("rooms").GetSnapshotAsync();

        var rooms = snapshot.Documents.Select(doc => doc.ConvertTo<RoomModel>()).ToList();
        return Ok(rooms);
    }
}
