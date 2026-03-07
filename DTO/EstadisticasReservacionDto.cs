using ProyectoS4.Models;

namespace ProyectoS4.DTO;

/// <summary>
/// DTO para transferencia de estadísticas de reservas.
/// </summary>
public class EstadisticasReservacionDto
{
    /// <summary>Identificador del reporte o período.</summary>
    public string IdEstadisticas { get; set; } = string.Empty;

    /// <summary>Inicio del período analizado.</summary>
    public DateTime InicioPeriodo { get; set; }

    /// <summary>Fin del período analizado.</summary>
    public DateTime FinPeriodo { get; set; }

    /// <summary>Tipo de período: Diario, Semanal, Mensual, Anual.</summary>
    public StatisticsPeriodType TipoPeriodo { get; set; }

    /// <summary>Total de habitaciones en el establecimiento en este período.</summary>
    public int TotalHabitaciones { get; set; }

    /// <summary>Noches totales disponibles.</summary>
    public int NochesDisponiblesTotal { get; set; }

    /// <summary>Noches efectivamente ocupadas por reservas.</summary>
    public int NochesOcupadas { get; set; }

    /// <summary>Porcentaje de ocupación (0–100).</summary>
    public decimal TasaOcupacion { get; set; }

    /// <summary>Cantidad total de reservas en el período.</summary>
    public int TotalReservas { get; set; }

    /// <summary>Reservas confirmadas.</summary>
    public int ReservasConfirmadas { get; set; }

    /// <summary>Reservas canceladas en el período.</summary>
    public int ReservasCanceladas { get; set; }

    /// <summary>Ingresos totales por reservas en el período.</summary>
    public decimal IngresosTotales { get; set; }

    /// <summary>Moneda del revenue.</summary>
    public string Moneda { get; set; } = "HNL";

    /// <summary>Fecha de generación del reporte.</summary>
    public DateTime FechaGeneracion { get; set; }
}
