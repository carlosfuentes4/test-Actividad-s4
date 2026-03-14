using ProyectoS4.Models;

namespace ProyectoS4.DTO;

/// <summary>
/// DTO para transferencia de datos de usuario.
/// </summary>
public class UsuarioDto
{
    /// <summary> Identificador único del usuario.</summary>
    public string IdUser { get; set; } = string.Empty;

    /// <summary>Correo electrónico único para autenticación y contacto.</summary>
    public string Correo { get; set; } = string.Empty;
    public string Contraseña { get; set; } = string.Empty;

    /// <summary>Nombre completo del usuario </summary>s
    public string NombreCompleto { get; set; } = string.Empty;

    /// <summary>Rol del usuario: Manager (gerente) o Guest (huésped).</summary>
    public UserRole Rol { get; set; }

    /// <summary>Teléfono de contacto (opcional).</summary>
    public string? Telefono { get; set; }

    /// <summary>Indica si el usuario está activo en el sistema.</summary>
    public bool Activo { get; set; } = true;

    /// <summary>Fecha de creación del registro.</summary>
    public DateTime FechaCreacion { get; set; }

    /// <summary>Última actualización del registro.</summary>
    public DateTime? FechaActualizacion { get; set; }
}
