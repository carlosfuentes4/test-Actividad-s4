namespace ProyectoS4.DTO
{
    public class DashboardDto
    {
        // Cantidad total de habitaciones registradas en el sistema
        public int TotalHabitaciones { get; set; }

        // Número de habitaciones que están disponibles
        public int HabitacionesDisponibles { get; set; }

        // Número de habitaciones que están ocupadas
        public int HabitacionesOcupadas { get; set; }

        // Total de reservaciones registradas
        public int TotalReservaciones { get; set; }

        // Suma total de ingresos generados por las reservaciones
        public decimal IngresoTotal { get; set; }
    }
}
