using Microsoft.AspNetCore.Mvc;
using Google.Cloud.Firestore;
using ProyectoS4.Models;
using ProyectoS4.Services;
using System.Reflection.Metadata.Ecma335;
using Microsoft.AspNetCore.Http.HttpResults;

namespace ProyectoS4.Controllers;

    [ApiController]
    [Route("api/reservations")]
  public class ReservationController : ControllerBase
{

    private readonly FirebaseService _firebaseService;

    //Constructor: INyeccion de dependecias. Permite usar FS dentro del controller

    public ReservationController(FirebaseService firebaseService) 
    {
        _firebaseService = firebaseService;
    }

    //Crea una nueva reserva
    //Endpoint: POST api/reservations

    [HttpPost]
    public async Task<IActionResult> CreateReservation([FromBody] ReservationModel reservation)
    {
        //Valida las fechas
        if (reservation.FechaSalida <= reservation.FechaEntrada)
        {
            return BadRequest(new
            {
                message = "La fecha de salida debe ser mayor que la fecha de entrada"
            });
        }


        // Auditoria
        reservation.FechaCreacion = DateTime.UtcNow;
        reservation.FechaActualizacion = null;

        //Obtener referencia a la coleccion "reservations"
        var docRef = _firebaseService.GetCollection("reservations").Document(reservation.IdReservacion);

        //Guardar la reserva en FS
        await docRef.SetAsync(reservation);

        return Ok(new
        {
            message = "Reserva creada", id = reservation.IdReservacion
        });
    }


[HttpGet]
public async Task<IActionResult> GetReservations()
{
    var snapshot = await _firebaseService.GetCollection("reservations").GetSnapshotAsync();

        var reservations = snapshot.Documents.Select(doc => doc.ConvertTo<ReservationModel>()).ToList();
    return Ok(reservations);
    }

}
