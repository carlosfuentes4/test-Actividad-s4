using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using ProyectoS4.DTO;
using ProyectoS4.Services;

namespace ProyectoS4.Controllers;

/// <summary>
/// API REST para gestión de habitaciones.
/// Se apoya en RoomService para toda la lógica de negocio y acceso a Firestore.
/// </summary>
[ApiController]
[Authorize]
[Route("api/rooms")]
public class RoomController : ControllerBase
{
    private readonly IRoomService _roomService;

    public RoomController(IRoomService roomService)
    {
        _roomService = roomService;
    }

    /// <summary>
    /// Crea una habitación en Firestore a partir de un DTO.
    /// Endpoint: POST api/rooms
    /// </summary>
    [HttpPost]
    public async Task<IActionResult> CreateRoom([FromBody] HabitacionDto dto)
    {
        var room = await _roomService.CreateRoom(dto);
        return Ok(new
        {
            message = "Habitación creada",
            id = room.IdHabitacion
        });
    }

    /// <summary>
    /// Obtiene todas las habitaciones registradas en formato DTO.
    /// Endpoint: GET api/rooms
    /// </summary>
    [HttpGet]
    public async Task<IActionResult> GetRooms()
    {
        var rooms = await _roomService.GetRooms();
        return Ok(rooms);
    }

    /// <summary>
    /// Obtiene una habitación por id.
    /// Endpoint: GET api/rooms/{id}
    /// </summary>
    [HttpGet("{id}")]
    public async Task<IActionResult> GetRoomById(string id)
    {
        var room = await _roomService.GetRoomById(id);
        if (room == null) return NotFound("Habitación no encontrada.");
        return Ok(room);
    }

    /// <summary>
    /// Actualiza una habitación existente.
    /// Endpoint: PUT api/rooms/{id}
    /// </summary>
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateRoom(string id, [FromBody] HabitacionDto dto)
    {
        try
        {
            var updated = await _roomService.UpdateRoom(id, dto);
            return Ok(new
            {
                message = "Habitación actualizada",
                id = updated.IdHabitacion
            });
        }
        catch (KeyNotFoundException ex)
        {
            return NotFound(ex.Message);
        }
    }

    /// <summary>
    /// Elimina una habitación sin reservas asociadas.
    /// Endpoint: DELETE api/rooms/{id}
    /// </summary>
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteRoom(string id)
    {
        try
        {
            await _roomService.DeleteRoom(id);
            return Ok(new { message = "Habitación eliminada", id });
        }
        catch (InvalidOperationException ex)
        {
            // Regla del proyecto: solo se puede eliminar si no tiene reservas
            return BadRequest(new { message = ex.Message });
        }
        catch (KeyNotFoundException ex)
        {
            return NotFound(new { message = ex.Message });
        }
    }
}

