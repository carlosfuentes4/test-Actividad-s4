namespace ProyectoS4.DTOs
{
    public class RoomDto
    {
        //IdHabitacion: identificador unico
        public string IdHabitacion { get; set; } = string.Empty;

        //Numero de habitacion visible
        public string NumeroHabitacion { get; set; } = string.Empty;

        //Tipo de habitacion
        public string TipoHabitacion { get; set; } = string.Empty;

        //Numero de personas que se pueden alojar
        public int Capacidad { get; set; } 

        //Precio que ve el cliente 
        public decimal PrecioPorNoche { get; set; }

        //Estado actual de la habitacion
        public string Estado {  get; set; } = string.Empty;

        //Descripcion de la habitacion
        public string Descripcion {  get; set; } = string.Empty;
    }
}
