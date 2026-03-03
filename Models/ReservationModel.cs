namespace ProyectoS4.Models;

/// <summary>
/// Representa una reserva única por habitación-período.
/// Garantiza integridad: una habitación no puede tener doble reserva en las mismas fechas.
/// Pagos y datos sensibles manejados con confidencialidad.
/// </summary>
public class ReservationModel
{
    /// <summary>Identificador único de la reserva (document ID en Firestore).</summary>
    public string IdReservacion { get; set; } = string.Empty;

    /// <summary>ID de la habitación reservada.</summary>
    public string IdHabitacion { get; set; } = string.Empty;

    /// <summary>ID del huésped que realiza la reserva.</summary>
    public string IdHuesped { get; set; } = string.Empty;

    /// <summary>Fecha y hora de check-in.</summary>
    public DateTime FechaEntrada { get; set; }

    /// <summary>Fecha y hora de check-out.</summary>
    public DateTime FechaSalida { get; set; }

    /// <summary>Estado de la reserva (pendiente, confirmada, cancelada, completada).</summary>
    public ReservationStatus Estado { get; set; }

    /// <summary>Número de huéspedes para esta reserva (validación vs capacidad de la habitación).</summary>
    public int NumeroHuespedes { get; set; }

    /// <summary>Total calculado de la estancia (transparencia; detalles de pago en sistema de pagos).</summary>
    public decimal MontoTotal { get; set; }

    /// <summary>Moneda del monto .</summary>
    public string Moneda { get; set; } = "HNL";

    /// <summary>Indica si el pago fue registrado/confirmado (sin exponer datos de pago).</summary>
    public bool PagoConfirmado { get; set; }

    /// <summary>Notas o solicitudes especiales del huésped.</summary>
    public string? SolicitudesEspeciales { get; set; }

    /// <summary>Fecha de creación de la reserva (auditoría).</summary>
    public DateTime FechaCreacion { get; set; }

    /// <summary>Última actualización (auditoría).</summary>
    public DateTime? FechaActualizacion { get; set; }

    /// <summary>Usuario o sistema que realizó la última modificación (auditoría).</summary>
    public string? ActualizadoPor { get; set; }
}

/// <summary>
/// Estados del ciclo de vida de una reserva.
/// </summary>
public enum ReservationStatus
{
    /// <summary>Reserva creada, pendiente de confirmación o pago.</summary>
    Pendiente = 0,

    /// <summary>Reserva confirmada y vinculante.</summary>
    Confirmado = 1,

    /// <summary>Check-in realizado; estancia en curso.</summary>
    EnProceso = 2,

    /// <summary>Check-out realizado; estancia completada.</summary>
    Completado = 3,

    /// <summary>Reserva cancelada.</summary>
    Cancelado = 4,

    /// <summary>No se presentó el huésped (no-show).</summary>
    Ausente = 5
}
