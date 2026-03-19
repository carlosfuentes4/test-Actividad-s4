namespace ProyectoS4.DTO;

public class AnalyticsDto
{
    // Resumen general
    public int TotalReservas { get; set; }
    public int ReservasActivas { get; set; }
    public int ReservasCanceladas { get; set; }
    public int ReservasCompletadas { get; set; }
    public decimal IngresosTotales { get; set; }
    public decimal IngresosMes { get; set; }

    // Ocupacion
    public int TotalHabitaciones { get; set; }
    public int HabitacionesOcupadas { get; set; }
    public double PorcentajeOcupacion { get; set; }

    // Graficas
    public List<ReservasPorEstadoDto> ReservasPorEstado { get; set; } = new();
    public List<OcupacionPorTipoDto> OcupacionPorTipo { get; set; } = new();
    public List<TendenciaTemporalDto> TendenciaMensual { get; set; } = new();
}

public class ReservasPorEstadoDto
{
    public string Estado { get; set; } = string.Empty;
    public int Cantidad { get; set; }
}

public class OcupacionPorTipoDto
{
    public string TipoHabitacion { get; set; } = string.Empty;
    public int Ocupadas { get; set; }
    public int Disponibles { get; set; }
}

public class TendenciaTemporalDto
{
    public string Mes { get; set; } = string.Empty;
    public int Reservas { get; set; }
    public decimal Ingresos { get; set; }
}
