namespace ProyectoS4.Models;

/// <summary>
/// Representa una habitación en el establecimiento hotelero.
/// Base para disponibilidad y prevención de overbooking (una reserva por habitación-período).
/// </summary>
public class RoomModel
{
    /// <summary>Identificador único de la habitación (document ID en Firestore).</summary>
    public string IdHabitacion { get; set; } = string.Empty;

    /// <summary>Número o código de la habitación .</summary>
    public string NumeroHabitacion { get; set; } = string.Empty;

    /// <summary>Tipo de habitación (estándar, suite, doble, etc.).</summary>
    public string TipoHabitacion { get; set; } = string.Empty;

    /// <summary>Capacidad máxima de huéspedes.</summary>
    public int Capacidad { get; set; }

    /// <summary>Precio por noche (moneda local).</summary>
    public decimal PrecioPorNoche { get; set; }

    /// <summary>Estado actual: disponible, ocupada, en mantenimiento, etc.</summary>
    public RoomStatus Estado { get; set; }

    /// <summary>Descripción o características (vista al mar, minibar, etc.).</summary>
    public string? Descripcion { get; set; }

    /// <summary>Indica si la habitación está activa en el inventario.</summary>
    public bool Activo { get; set; } = true;

    /// <summary>Fecha de creación del registro (auditoría).</summary>
    public DateTime FechaCreacion { get; set; }

    /// <summary>Última actualización del registro (auditoría).</summary>
    public DateTime? FechaActualizacion { get; set; }
}

/// <summary>
/// Estados posibles de una habitación para gestión y disponibilidad en tiempo real.
/// </summary>
public enum RoomStatus
{
    /// <summary>Disponible para reserva.</summary>
    Disponible = 0,

    /// <summary>Ocupada por una reserva vigente.</summary>
    Ocupado = 1,

    /// <summary>En mantenimiento o fuera de servicio.</summary>
    EnMantenimiento = 2,

    /// <summary>Reservada (asignada a una reserva futura).</summary>
    Reservado = 3
}
