using ProyectoS4.Models;

namespace ProyectoS4.DTO;

/// <summary>
/// DTO para transferencia de estadísticas de reservas.
/// </summary>
public class EstadisticasReservacionDto
{
    /// <summary>Identificador del reporte o período.</summary>
    public string IdEstadistica { get; set; } = string.Empty;

    /// <summary>Fecha de inicio de periodo en analisis</summary>
    public DateTime InicioPeriodo { get; set; }

    /// <summary>Fecha de fin de periodo en analisis</summary>
    public DateTime FinPeriodo { get; set; }

    /// <summary>Indica si el periodo es: Diario, Semanal, Mensual, Anual.</summary>
    public StatisticsPeriodType TipoPeriodo { get; set; }

    /// <summary>Total de habitaciones en el establecimiento en este periodo.</summary>
    public int TotalHabitaciones { get; set; }

    /// <summary>Noches totales disponibles.</summary>
    public int NochesDisponiblesTotal { get; set; }

    /// <summary>Noches ocupadas por reservas.</summary>
    public int NochesOcupadas { get; set; }

    /// <summary>Porcentaje de ocupación (0–100).</summary>
    public decimal TasaOcupacion { get; set; }

    /// <summary>Cantidad total de reservas en el periodo.</summary>
    public int TotalReservas { get; set; }

    /// <summary>Reservas confirmadas.</summary>
    public int ReservasConfirmadas { get; set; }

    /// <summary>Reservas canceladas durante el perido</summary>
    public int ReservasCanceladas { get; set; }

    /// <summary>Ingresos totales por reservas en el periodo.</summary>
    public decimal IngresosTotales { get; set; }

    /// <summary>Moneda del ingreso.</summary>
    public string Moneda { get; set; } = "HNL";

    /// <summary>Fecha de generación del reporte.</summary>
    public DateTime FechaGeneracion { get; set; }
}
