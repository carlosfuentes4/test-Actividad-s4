namespace ProyectoS4.Models;

/// <summary>
/// Representa un usuario de la plataforma ProBook.
/// Dos tipos: Gerente (gestión de habitaciones y monitoreo) y Huésped (realiza reservas).
/// </summary>
public class UserModel
{
    /// <summary>Identificador único del usuario (document ID en Firestore).</summary>
    public string IdUser { get; set; } = string.Empty;

    /// <summary>Correo electrónico único para autenticación y contacto.</summary>
    public string Correo { get; set; } = string.Empty;

    /// <summary>Nombre completo del usuario.</summary>
    public string NombreCompleto { get; set; } = string.Empty;

    /// <summary>Rol del usuario: Manager (gerente) o Guest (huésped).</summary>
    public UserRole Rol { get; set; }

    /// <summary>Teléfono de contacto (opcional).</summary>
    public string? Telefono { get; set; }

    /// <summary>Indica si el usuario está activo en el sistema.</summary>
    public bool Activo { get; set; } = true;

    /// <summary>Fecha de creación del registro (auditoría).</summary>
    public DateTime FechaCreacion { get; set; }

    /// <summary>Última actualización del registro (auditoría).</summary>
    public DateTime? FechaActualizacion { get; set; }
}

/// <summary>
/// Roles soportados : gerentes gestionan habitaciones; huéspedes realizan reservas.
/// </summary>
public enum UserRole
{
    /// <summary>Gerente: gestiona habitaciones y monitorea disponibilidad en tiempo real.</summary>
    Manager = 0,

    /// <summary>Huésped: realiza reservas de forma única y vinculante.</summary>
    Invitado = 1
}
