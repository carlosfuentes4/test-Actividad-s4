using ProyectoS4.Models;

namespace ProyectoS4.DTO;

/// <summary>
/// DTO para transferencia de datos de habitación.
/// </summary>
public class HabitacionDto
{
    /// <summary>Identificador único de la habitación.</summary>
    public string IdHabitacion { get; set; } = string.Empty;

    /// <summary>Número o código de la habitación.</summary>
    public string NumeroHabitacion { get; set; } = string.Empty;

    /// <summary>Tipo de habitación (estándar, suite, doble, etc.).</summary>
    public string TipoHabitacion { get; set; } = string.Empty;

    /// <summary>Capacidad máxima de huéspedes.</summary>
    public int Capacidad { get; set; }

    /// <summary>Precio por noche (moneda local).</summary>
    public decimal PrecioPorNoche { get; set; }

    /// <summary>Estado actual: disponible, ocupada, en mantenimiento, etc.</summary>
    public RoomStatus Estado { get; set; }

    /// <summary>Descripción o características.</summary>
    public string? Descripcion { get; set; }

    /// <summary>Indica si la habitación está activa en el inventario.</summary>
    public bool Activo { get; set; } = true;

    /// <summary>Fecha de creación del registro.</summary>
    public DateTime FechaCreacion { get; set; }

    /// <summary>Última actualización del registro.</summary>
    public DateTime? FechaActualizacion { get; set; }
}
