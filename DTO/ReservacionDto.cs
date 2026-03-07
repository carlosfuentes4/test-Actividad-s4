using ProyectoS4.Models;

namespace ProyectoS4.DTO;

/// <summary>
/// DTO para transferencia de datos de reserva.
/// </summary>
public class ReservacionDto
{
    /// <summary>Identificador único de la reserva.</summary>
    public string IdReservacion { get; set; } = string.Empty;

    /// <summary>ID de la habitación reservada.</summary>
    public string IdHabitacion { get; set; } = string.Empty;

    /// <summary>ID del huésped que realiza la reserva.</summary>
    public string IdHuesped { get; set; } = string.Empty;

    /// <summary>Fecha y hora de check-in.</summary>
    public DateTime FechaEntrada { get; set; }

    /// <summary>Fecha y hora de check-out.</summary>
    public DateTime FechaSalida { get; set; }

    /// <summary>Estado de la reserva.</summary>
    public ReservationStatus Estado { get; set; }

    /// <summary>Número de huéspedes para esta reserva.</summary>
    public int NumeroHuespedes { get; set; }

    /// <summary>Total calculado de la estancia.</summary>
    public decimal MontoTotal { get; set; }

    /// <summary>Moneda del monto.</summary>
    public string Moneda { get; set; } = "HNL";

    /// <summary>Indica si el pago fue registrado/confirmado.</summary>
    public bool PagoConfirmado { get; set; }

    /// <summary>Notas o solicitudes especiales del huésped.</summary>
    public string? SolicitudesEspeciales { get; set; }

    /// <summary>Fecha de creación de la reserva.</summary>
    public DateTime FechaCreacion { get; set; }

    /// <summary>Última actualización.</summary>
    public DateTime? FechaActualizacion { get; set; }

    /// <summary>Usuario o sistema que realizó la última modificación.</summary>
    public string? ActualizadoPor { get; set; }
}
