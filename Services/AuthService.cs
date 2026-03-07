using ProyectoS4.Models;
using ProyectoS4.DTO;
using ProyectoS4.Services;
namespace ProyectoS4.Services
{
    public class AuthService
    {
        private readonly IConfiguration _configuration;
        private readonly FirebaseService _firebaseService;

        public async Task<UsuarioDto> Register(UsuarioDto registerDto)
        {

            try
            {
                //Validar el correo y password != null
                if (string.IsNullOrWhiteSpace(registerDto.Correo) ||
                    string.IsNullOrWhiteSpace(registerDto.Contraseña))
                {
                    throw new ArgumentNullException("Email y password son requeridos");
                }

                // Validar la longitud del password
                if (registerDto.Contraseña.Length < 6)
                {
                    throw new ArgumentNullException("Password debe contener al menos 6 caracteres");
                }

                // Obtener la coleccion del usuario en FS
                var userCollection = _firebaseService.GetCollection("users");

                // Verificar que el correo no este registrado
                // Query para buscar documentos donde el email == registerDto.Email
                var query = await userCollection
                    .WhereEqualTo("Email", registerDto.Correo)
                    .GetSnapshotAsync();

                // Si hay resultados, significa que ya existe
                if (query.Count > 0)
                {
                    throw new InvalidOperationException("El email ya esta registrado");
                }


                // Crear el usuario nuevo
                // El ID se genera autimaticamente por FB

                var newUser = new UsuarioDto
                {
                    IdUser = Guid.NewGuid().ToString(), //Generar el id unico
                    Correo = registerDto.Correo,
                    NombreCompleto = registerDto.NombreCompleto,
                    FechaCreacion = DateTime.UtcNow,
                    Activo = true
                };

                // Guardar el usuario en FS
                // SetAsync guardar en el documento el usuario (Si no existe, lo crea y si existe lo actualiza)
                await userCollection.Document(newUser.IdUser).SetAsync(newUser);

                // Devolver el usuario creado (sin password)
                return newUser;


            }
            catch (Exception e)
            {
                Console.WriteLine($"Error al registrar usuario: {e.Message}");
                throw;
            }
        }

    }
}