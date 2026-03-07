using Microsoft.AspNetCore.Mvc;
using Google.Cloud.Firestore;
using ProyectoS4.Models;
using ProyectoS4.Services;

namespace ProyectoS4.Controllers;

/*
 * Controller encargado de gestionar las habitaciones del hotel
 * Permite crear y obtener habitaciones desde FS
 */
    [ApiController]
    [Route("api/rooms")]
public class RoomController : ControllerBase

{
   
    private readonly FirebaseService _firebaseServices;

    /*
     * Constructor: ASP.NET Core inyecta automaticamente FirebaseService
     */
    public RoomController(FirebaseService firebaseServices)
    
    {
        _firebaseServices = firebaseServices;
    }

    /*
     * Crea una habitacion en FS
     * Enpoint: POST api/rooms
     * Recibe los datos de la habitacion en el cuerpo (Body) de la peticion
     */
   
    [HttpPost]
    public async Task<IActionResult> CreateRoom([FromBody] RoomModel room)
    {
        
        //Se asigna la fecha actual al momento de crear la habitacion
        room.FechaCreacion = DateTime.UtcNow;

        // Al inicio no hay fecha de actualizacion
        room.FechaActualizacion = null;

        //Se obtiene la collecion "room" en FireStore
        var docRef = _firebaseServices.GetCollection("rooms").Document(room.IdHabitacion);

        //Se guarda en FS
        await docRef.SetAsync(room);
        //Se devuelve la respuesta al cliente exitosa
        return Ok(new {message = "Habitacion creada ", id = room.IdHabitacion});
    }

    /*
     * Obtiene todas las habitaciones registradas
     * Endpoint: GET api/room
     */
   
    [HttpGet]
    public async Task<IActionResult> GetRooms()
    {
        //SE obtiene todos los documentos de la collecion "room"
        var snapshot = await _firebaseServices.GetCollection("rooms").GetSnapshotAsync();

        //Convierte cada documento de FS en un objeto RoomModel
        var rooms = snapshot.Documents.Select(doc => doc.ConvertTo<RoomModel>()).ToList();
        //Devuelve lista habitaciones
        return Ok(rooms);
    }
}
