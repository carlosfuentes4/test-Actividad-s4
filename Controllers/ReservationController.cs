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

        // Evitar duplicados: misma habitación no puede tener otra reserva en las mismas fechas (salvo canceladas/ausente)
        var reservasHabitacion = await _firebaseService
            .GetCollection("reservations")
            .WhereEqualTo("IdHabitacion", reservation.IdHabitacion)
            .GetSnapshotAsync();

        foreach (var doc in reservasHabitacion.Documents)
        {
            var existente = FromFirestoreDocument(doc);
            if (existente.Estado == ReservationStatus.Cancelado || existente.Estado == ReservationStatus.Ausente)
                continue;
            if (SolapanFechas(existente.FechaEntrada, existente.FechaSalida, reservation.FechaEntrada, reservation.FechaSalida))
            {
                return BadRequest(new
                {
                    message = "La habitación ya tiene una reserva en esas fechas.",
                    habitacionId = reservation.IdHabitacion,
                    entradaExistente = existente.FechaEntrada,
                    salidaExistente = existente.FechaSalida
                });
            }
        }

        // Si no viene id, se genera uno (Firestore no permite document path vacío)
        if (string.IsNullOrWhiteSpace(reservation.IdReservacion))
            reservation.IdReservacion = Guid.NewGuid().ToString();

        // Auditoria
        reservation.FechaCreacion = DateTime.UtcNow;
        reservation.FechaActualizacion = null;

        //Obtener referencia a la coleccion "reservations"
        var docRef = _firebaseService.GetCollection("reservations").Document(reservation.IdReservacion);

        // Guardar como diccionario: el SDK no serializa bien ReservationModel (enum + DateTime)
        await docRef.SetAsync(ToFirestoreMap(reservation));

        return Ok(new
        {
            message = "Reserva creada", id = reservation.IdReservacion
        });
    }

    [HttpGet]
    public async Task<IActionResult> GetReservations()
    {
        var snapshot = await _firebaseService.GetCollection("reservations").GetSnapshotAsync();
        var reservations = snapshot.Documents.Select(FromFirestoreDocument).ToList();
        return Ok(reservations);
    }

    /// <summary>Convierte ReservationModel a diccionario para Firestore (enum como int, DateTime como Timestamp).</summary>
    private static Dictionary<string, object> ToFirestoreMap(ReservationModel r)
    {
        var map = new Dictionary<string, object>
        {
            { "IdReservacion", r.IdReservacion },
            { "IdHabitacion", r.IdHabitacion },
            { "IdHuesped", r.IdHuesped },
            { "FechaEntrada", Timestamp.FromDateTime(r.FechaEntrada.ToUniversalTime()) },
            { "FechaSalida", Timestamp.FromDateTime(r.FechaSalida.ToUniversalTime()) },
            { "Estado", (int)r.Estado },
            { "NumeroHuespedes", r.NumeroHuespedes },
            { "MontoTotal", (double)r.MontoTotal },
            { "Moneda", r.Moneda },
            { "PagoConfirmado", r.PagoConfirmado },
            { "FechaCreacion", Timestamp.FromDateTime(r.FechaCreacion.ToUniversalTime()) }
        };
        if (r.SolicitudesEspeciales != null) map["SolicitudesEspeciales"] = r.SolicitudesEspeciales;
        if (r.FechaActualizacion.HasValue) map["FechaActualizacion"] = Timestamp.FromDateTime(r.FechaActualizacion.Value.ToUniversalTime());
        if (r.ActualizadoPor != null) map["ActualizadoPor"] = r.ActualizadoPor;
        return map;
    }

    /// <summary>Lee un documento de Firestore y lo mapea a ReservationModel.</summary>
    private static ReservationModel FromFirestoreDocument(DocumentSnapshot snapshot)
    {
        var data = snapshot.ToDictionary();
        return new ReservationModel
        {
            IdReservacion = GetStr(data, "IdReservacion") ?? snapshot.Id,
            IdHabitacion = GetStr(data, "IdHabitacion") ?? "",
            IdHuesped = GetStr(data, "IdHuesped") ?? "",
            FechaEntrada = GetDateTime(data, "FechaEntrada") ?? DateTime.UtcNow,
            FechaSalida = GetDateTime(data, "FechaSalida") ?? DateTime.UtcNow,
            Estado = (ReservationStatus)GetInt(data, "Estado"),
            NumeroHuespedes = GetInt(data, "NumeroHuespedes"),
            MontoTotal = GetDecimal(data, "MontoTotal"),
            Moneda = GetStr(data, "Moneda") ?? "HNL",
            PagoConfirmado = data.TryGetValue("PagoConfirmado", out var pc) && pc is bool b ? b : false,
            SolicitudesEspeciales = GetStr(data, "SolicitudesEspeciales"),
            FechaCreacion = GetDateTime(data, "FechaCreacion") ?? DateTime.UtcNow,
            FechaActualizacion = GetDateTime(data, "FechaActualizacion"),
            ActualizadoPor = GetStr(data, "ActualizadoPor")
        };
    }

    private static string? GetStr(Dictionary<string, object> data, string key) =>
        data.TryGetValue(key, out var v) && v is string s ? s : null;

    private static int GetInt(Dictionary<string, object> data, string key)
    {
        if (!data.TryGetValue(key, out var v)) return 0;
        if (v is long l) return (int)l;
        if (v is int i) return i;
        return 0;
    }

    private static decimal GetDecimal(Dictionary<string, object> data, string key)
    {
        if (!data.TryGetValue(key, out var v)) return 0;
        if (v is double d) return (decimal)d;
        if (v is long l) return l;
        if (v is int i) return i;
        return 0;
    }

    private static DateTime? GetDateTime(Dictionary<string, object> data, string key)
    {
        if (!data.TryGetValue(key, out var v)) return null;
        if (v is Timestamp ts) return ts.ToDateTime();
        return null;
    }

    /// <summary>Indica si dos rangos de fechas se solapan (una habitación no puede tener dos reservas a la vez).</summary>
    private static bool SolapanFechas(DateTime ent1, DateTime sal1, DateTime ent2, DateTime sal2) =>
        ent1 < sal2 && sal1 > ent2;
}
