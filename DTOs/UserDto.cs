namespace ProyectoS4.DTOs
{
    public class UserDto
    {
        //IdUser: Identificador del usuario
        public string IdUser { get; set; } = string.Empty;

        //FullName: nombre visible del usuario
        public string FullName { get; set; } = string.Empty ;

        //Correo del usuario
        public string Email {  get; set; } = string.Empty ;

        //Rol del usuario en el sistema
        public string Rol { get; set; } = string.Empty;

        //Telefono del usuario
        public string Telefono { get; set; } = string.Empty;
    }
}
