using System.ComponentModel.DataAnnotations;
using Google.Cloud.Firestore;

namespace ProyectoS4.Models;
/*
 *[FirestoreData] — le dice a Firestore "esta clase la puedes serializar/deserializar"
 *[FirestoreProperty("nombre")] — le dice a Firestore cómo se llama ese campo en la base de datos
*/


/// <summary>
/// Representa un usuario de la plataforma ProBook.
/// Dos tipos: Gerente (gestión de habitaciones y monitoreo) y Huésped (realiza reservas).
/// </summary>
[FirestoreData]
public class UserModel
{
    /// <summary>Identificador único del usuario (document ID en Firestore).</summary>
    [FirestoreProperty("idUser")] 
    public string IdUser { get; set; } = string.Empty;

    /// <summary>Correo electrónico único para autenticación y contacto.</summary>
    [Required(ErrorMessage = "Correo es obligatorio.")]
    [FirestoreProperty("correo")]
    public string Correo { get; set; } = string.Empty;

    /// <summary>Nombre completo del usuario.</summary>
    [Required(ErrorMessage = "NombreCompleto es obligatorio.")]
    [FirestoreProperty("nombreCompleto")]
    public string NombreCompleto { get; set; } = string.Empty;

    /// <summary>Rol del usuario: Manager (gerente) o Guest (huésped).</summary>
    [FirestoreProperty("rol")]
    public UserRole Rol { get; set; }

    /// <summary>Teléfono de contacto (opcional).</summary>
    [FirestoreProperty("telefono")]
    public string? Telefono { get; set; }

    /// <summary>Indica si el usuario está activo en el sistema.</summary>
    [FirestoreProperty("activo")]
    public bool Activo { get; set; } = true;

    /// <summary>Fecha de creación del registro (auditoría).</summary>
    [FirestoreProperty("fechaCreacion")]
    public DateTime FechaCreacion { get; set; }

    /// <summary>Última actualización del registro (auditoría).</summary>
    [FirestoreProperty("fechaActualizacion")]
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
