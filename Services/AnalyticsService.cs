using Google.Cloud.Firestore;
using ProyectoS4.DTO;
using ProyectoS4.Models;

namespace ProyectoS4.Services;

public class AnalyticsService : IAnalyticsService
{
    private readonly FirebaseService _firebaseService;
    private readonly ILogger<AnalyticsService> _logger;

    public AnalyticsService(FirebaseService firebaseService, ILogger<AnalyticsService> logger)
    {
        _firebaseService = firebaseService;
        _logger = logger;
    }

    public async Task<AnalyticsDto> GetAnalytics()
    {
        // Traer reservaciones y habitaciones en paralelo
        var reservationsTask = _firebaseService.GetCollection("reservations").GetSnapshotAsync();
        var roomsTask = _firebaseService.GetCollection("rooms").GetSnapshotAsync();

        await Task.WhenAll(reservationsTask, roomsTask);

        var reservations = reservationsTask.Result.Documents
            .Select(FromReservation)
            .ToList();

        var rooms = roomsTask.Result.Documents
            .Select(FromRoom)
            .ToList();

        var ahora = DateTime.UtcNow;
        var inicioMes = new DateTime(ahora.Year, ahora.Month, 1);

        return new AnalyticsDto
        {
            // Resumen
            TotalReservas = reservations.Count,
            ReservasActivas = reservations.Count(r => r.Estado == ReservationStatus.Confirmado || r.Estado == ReservationStatus.EnProceso),
            ReservasCanceladas = reservations.Count(r => r.Estado == ReservationStatus.Cancelado),
            ReservasCompletadas = reservations.Count(r => r.Estado == ReservationStatus.Completado),
            IngresosTotales = reservations.Where(r => r.PagoConfirmado).Sum(r => r.MontoTotal),
            IngresosMes = reservations.Where(r => r.PagoConfirmado && r.FechaCreacion >= inicioMes).Sum(r => r.MontoTotal),

            // Ocupacion
            TotalHabitaciones = rooms.Count,
            HabitacionesOcupadas = rooms.Count(r => r.Estado == RoomStatus.Ocupado),
            PorcentajeOcupacion = rooms.Count > 0
                ? Math.Round((double)rooms.Count(r => r.Estado == RoomStatus.Ocupado) / rooms.Count * 100, 1)
                : 0,

            // Reservas por estado (grafica circular)
            ReservasPorEstado = Enum.GetValues<ReservationStatus>()
                .Select(estado => new ReservasPorEstadoDto
                {
                    Estado = estado.ToString(),
                    Cantidad = reservations.Count(r => r.Estado == estado)
                })
                .Where(x => x.Cantidad > 0)
                .ToList(),

            // Ocupacion por tipo de habitacion (grafica de barras)
            OcupacionPorTipo = rooms
                .GroupBy(r => r.TipoHabitacion)
                .Select(g => new OcupacionPorTipoDto
                {
                    TipoHabitacion = g.Key,
                    Ocupadas = g.Count(r => r.Estado == RoomStatus.Ocupado),
                    Disponibles = g.Count(r => r.Estado == RoomStatus.Disponible)
                })
                .ToList(),

            // Tendencia mensual ultimos 6 meses (grafica de linea)
            TendenciaMensual = Enumerable.Range(0, 6)
                .Select(i => ahora.AddMonths(-i))
                .Select(fecha => new TendenciaTemporalDto
                {
                    Mes = fecha.ToString("MMM yyyy"),
                    Reservas = reservations.Count(r => r.FechaCreacion.Year == fecha.Year && r.FechaCreacion.Month == fecha.Month),
                    Ingresos = reservations.Where(r => r.PagoConfirmado && r.FechaCreacion.Year == fecha.Year && r.FechaCreacion.Month == fecha.Month).Sum(r => r.MontoTotal)
                })
                .Reverse()
                .ToList()
        };
    }

    private static ReservationModel FromReservation(DocumentSnapshot doc)
    {
        var d = doc.ToDictionary();
        return new ReservationModel
        {
            IdReservacion = doc.Id,
            IdHabitacion = d.TryGetValue("IdHabitacion", out var h) ? h?.ToString() ?? "" : "",
            IdHuesped = d.TryGetValue("IdHuesped", out var hu) ? hu?.ToString() ?? "" : "",
            Estado = d.TryGetValue("Estado", out var e) ? (ReservationStatus)(int)(long)e : ReservationStatus.Pendiente,
            MontoTotal = d.TryGetValue("MontoTotal", out var m) ? (decimal)(double)m : 0,
            PagoConfirmado = d.TryGetValue("PagoConfirmado", out var p) && p is bool b && b,
            FechaCreacion = d.TryGetValue("FechaCreacion", out var f) && f is Timestamp ts ? ts.ToDateTime() : DateTime.UtcNow,
            FechaEntrada = d.TryGetValue("FechaEntrada", out var fe) && fe is Timestamp tse ? tse.ToDateTime() : DateTime.UtcNow,
            FechaSalida = d.TryGetValue("FechaSalida", out var fs) && fs is Timestamp tss ? tss.ToDateTime() : DateTime.UtcNow,
        };
    }

    private static RoomModel FromRoom(DocumentSnapshot doc)
    {
        var d = doc.ToDictionary();
        return new RoomModel
        {
            IdHabitacion = doc.Id,
            TipoHabitacion = d.TryGetValue("TipoHabitacion", out var t) ? t?.ToString() ?? "" : "",
            Estado = d.TryGetValue("Estado", out var e) ? (RoomStatus)(int)(long)e : RoomStatus.Disponible,
        };
    }
}
