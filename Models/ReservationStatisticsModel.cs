namespace ProyectoS4.Models;

/// <summary>
/// Modelo para análisis de ocupación y tendencias de demanda.
/// Usado por gerentes para reportes visuales y toma de decisiones.
/// </summary>
public class ReservationStatisticsModel
{
    /// <summary>Identificador del reporte o período (document ID en Firestore).</summary>
    public string IdEstadisticas { get; set; } = string.Empty;

    /// <summary>Inicio del período analizado (ej: inicio de semana, mes, año).</summary>
    public DateTime InicioPeriodo { get; set; }

    /// <summary>Fin del período analizado.</summary>
    public DateTime FinPeriodo { get; set; }

    /// <summary>Tipo de período: Diario, Semanal, Mensual, Anual.</summary>
    public StatisticsPeriodType TipoPeriodo { get; set; }

    /// <summary>Total de habitaciones en el establecimiento en este período.</summary>
    public int TotalHabitaciones { get; set; }

    /// <summary>Noches totales disponibles (TotalHabitaciones × noches en el período).</summary>
    public int NochesDisponiblesTotal { get; set; }

    /// <summary>Noches efectivamente ocupadas por reservas.</summary>
    public int NochesOcupadas { get; set; }

    /// <summary>Porcentaje de ocupación (0–100).</summary>
    public decimal TasaOcupacion { get; set; }

    /// <summary>Cantidad total de reservas en el período.</summary>
    public int TotalReservas { get; set; }

    /// <summary>Reservas confirmadas (estado Confirmed o superiores).</summary>
    public int ReservasConfirmadas { get; set; }

    /// <summary>Reservas canceladas en el período.</summary>
    public int ReservasCanceladas { get; set; }

    /// <summary>Ingresos totales por reservas en el período (transparencia para gerencia).</summary>
    public decimal IngresosTotales { get; set; }

    /// <summary>Moneda del revenue.</summary>
    public string Moneda { get; set; } = "HNL";

    /// <summary>Fecha de generación del reporte (auditoría).</summary>
    public DateTime FechaGeneracion { get; set; }
}

/// <summary>
/// Tipo de período para agrupar estadísticas de reservas.
/// </summary>
public enum StatisticsPeriodType
{
    Daily = 0,
    Weekly = 1,
    Monthly = 2,
    Yearly = 3
}
