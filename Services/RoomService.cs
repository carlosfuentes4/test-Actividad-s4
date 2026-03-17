using Google.Cloud.Firestore;
using ProyectoS4.DTO;
using ProyectoS4.Models;

namespace ProyectoS4.Services;

/// <summary>
/// Servicio de dominio para gestionar habitaciones en Firestore.
/// Centraliza la lógica de negocio y el mapeo entre modelos y DTOs.
/// La escritura en Firestore se hace con diccionarios para evitar el error de
/// serialización del SDK con enums (RoomStatus) y DateTime.
/// </summary>
public class RoomService : IRoomService
{
    private readonly FirebaseService _firebaseService;
    private readonly ILogger<RoomService> _logger;

    public RoomService(FirebaseService firebaseService, ILogger<RoomService> logger)
    {
        _firebaseService = firebaseService;
        _logger = logger;
    }

    /// <summary>
    /// Obtiene todas las habitaciones en formato DTO para exponer al frontend.
    /// </summary>
    public async Task<List<HabitacionDto>> GetRooms()
    {
        var snapshot = await _firebaseService
            .GetCollection("rooms")
            .GetSnapshotAsync();

        var rooms = snapshot.Documents
            .Select(FromFirestoreDocument)
            .Select(MapToDto)
            .ToList();

        return rooms;
    }

    /// <summary>
    /// Obtiene una habitación específica por id. Devuelve null si no existe.
    /// </summary>
    public async Task<HabitacionDto?> GetRoomById(string roomId)
    {
        var docRef = _firebaseService.GetCollection("rooms").Document(roomId);
        var snapshot = await docRef.GetSnapshotAsync();

        if (!snapshot.Exists) return null;

        var model = FromFirestoreDocument(snapshot);
        return MapToDto(model);
    }

    /// <summary>
    /// Crea una habitación nueva en Firestore a partir de un DTO.
    /// </summary>
    public async Task<RoomModel> CreateRoom(HabitacionDto dto)
    {
        var room = new RoomModel
        {
            IdHabitacion = string.IsNullOrWhiteSpace(dto.IdHabitacion)
                ? Guid.NewGuid().ToString()
                : dto.IdHabitacion,
            NumeroHabitacion = dto.NumeroHabitacion,
            TipoHabitacion = dto.TipoHabitacion,
            Capacidad = dto.Capacidad,
            PrecioPorNoche = dto.PrecioPorNoche,
            Estado = Enum.TryParse<RoomStatus>(dto.Estado, out var estadoParsed)
                ? estadoParsed
                : RoomStatus.Disponible,
            Descripcion = dto.Descripcion,
            Activo = true,
            FechaCreacion = DateTime.UtcNow,
            FechaActualizacion = null
        };

        var docRef = _firebaseService
            .GetCollection("rooms")
            .Document(room.IdHabitacion);

        // Escribir como diccionario: el SDK no serializa bien RoomModel (enum + DateTime)
        await docRef.SetAsync(ToFirestoreMap(room));

        _logger.LogInformation("Habitación creada en Firestore con Id {Id}", room.IdHabitacion);

        return room;
    }

    /// <summary>
    /// Actualiza una habitación existente. Lanza excepción si no existe.
    /// </summary>
    public async Task<RoomModel> UpdateRoom(string roomId, HabitacionDto dto)
    {
        var collection = _firebaseService.GetCollection("rooms");
        var docRef = collection.Document(roomId);
        var snapshot = await docRef.GetSnapshotAsync();

        if (!snapshot.Exists)
        {
            throw new KeyNotFoundException("La habitación no existe.");
        }

        var model = FromFirestoreDocument(snapshot);

        model.NumeroHabitacion = dto.NumeroHabitacion;
        model.TipoHabitacion = dto.TipoHabitacion;
        model.Capacidad = dto.Capacidad;
        model.PrecioPorNoche = dto.PrecioPorNoche;
        model.Descripcion = dto.Descripcion;
        model.Estado = Enum.TryParse<RoomStatus>(dto.Estado, out var estadoParsed)
            ? estadoParsed
            : model.Estado;
        model.FechaActualizacion = DateTime.UtcNow;

        await docRef.SetAsync(ToFirestoreMap(model), SetOptions.Overwrite);

        _logger.LogInformation("Habitación {Id} actualizada en Firestore", roomId);

        return model;
    }

    /// <summary>
    /// Elimina una habitación siempre que no tenga reservas asociadas.
    /// Lanza excepción si existen reservas o si la habitación no existe.
    /// </summary>
    public async Task DeleteRoom(string roomId)
    {
        // Validar que no existan reservas que apunten a esta habitación.
        var reservationsQuery = _firebaseService
            .GetCollection("reservations")
            .WhereEqualTo("IdHabitacion", roomId)
            .Limit(1);

        var reservationsSnapshot = await reservationsQuery.GetSnapshotAsync();

        if (reservationsSnapshot.Count > 0)
        {
            throw new InvalidOperationException(
                "No se puede eliminar la habitación porque tiene reservas asociadas."
            );
        }

        var roomsCollection = _firebaseService.GetCollection("rooms");
        var docRef = roomsCollection.Document(roomId);
        var snapshot = await docRef.GetSnapshotAsync();

        if (!snapshot.Exists)
        {
            throw new KeyNotFoundException("La habitación no existe.");
        }

        await docRef.DeleteAsync();
        _logger.LogInformation("Habitación {Id} eliminada de Firestore", roomId);
    }

    /// <summary>
    /// Convierte RoomModel a un diccionario con tipos que Firestore serializa sin error
    /// (enum como int, DateTime como Timestamp, decimal como double).
    /// </summary>
    private static Dictionary<string, object> ToFirestoreMap(RoomModel room)
    {
        var map = new Dictionary<string, object>
        {
            { "IdHabitacion", room.IdHabitacion },
            { "NumeroHabitacion", room.NumeroHabitacion },
            { "TipoHabitacion", room.TipoHabitacion },
            { "Capacidad", room.Capacidad },
            { "PrecioPorNoche", (double)room.PrecioPorNoche },
            { "Estado", (int)room.Estado },
            { "Activo", room.Activo },
            { "FechaCreacion", Timestamp.FromDateTime(room.FechaCreacion.ToUniversalTime()) }
        };
        if (room.Descripcion != null)
            map["Descripcion"] = room.Descripcion;
        if (room.FechaActualizacion.HasValue)
            map["FechaActualizacion"] = Timestamp.FromDateTime(room.FechaActualizacion.Value.ToUniversalTime());
        return map;
    }

    /// <summary>
    /// Lee un documento de Firestore y lo mapea a RoomModel (evita ConvertTo por enum/DateTime).
    /// </summary>
    private static RoomModel FromFirestoreDocument(DocumentSnapshot snapshot)
    {
        var data = snapshot.ToDictionary();
        return new RoomModel
        {
            IdHabitacion = GetString(data, "IdHabitacion") ?? snapshot.Id,
            NumeroHabitacion = GetString(data, "NumeroHabitacion") ?? "",
            TipoHabitacion = GetString(data, "TipoHabitacion") ?? "",
            Capacidad = GetInt(data, "Capacidad"),
            PrecioPorNoche = GetDecimal(data, "PrecioPorNoche"),
            Estado = (RoomStatus)GetInt(data, "Estado"),
            Descripcion = GetString(data, "Descripcion"),
            Activo = data.TryGetValue("Activo", out var activo) && activo is bool b ? b : true,
            FechaCreacion = GetDateTime(data, "FechaCreacion") ?? DateTime.UtcNow,
            FechaActualizacion = GetDateTime(data, "FechaActualizacion")
        };
    }

    private static string? GetString(Dictionary<string, object> data, string key) =>
        data.TryGetValue(key, out var v) && v is string s ? s : null;

    private static int GetInt(Dictionary<string, object> data, string key)
    {
        if (!data.TryGetValue(key, out var v)) return 0;
        if (v is long l) return (int)l;
        if (v is int i) return i;
        return 0;
    }

    private static decimal GetDecimal(Dictionary<string, object> data, string key)
    {
        if (!data.TryGetValue(key, out var v)) return 0;
        if (v is double d) return (decimal)d;
        if (v is long l) return l;
        if (v is int i) return i;
        return 0;
    }

    private static DateTime? GetDateTime(Dictionary<string, object> data, string key)
    {
        if (!data.TryGetValue(key, out var v)) return null;
        if (v is Timestamp ts) return ts.ToDateTime();
        return null;
    }

    private static HabitacionDto MapToDto(RoomModel model)
    {
        return new HabitacionDto
        {
            IdHabitacion = model.IdHabitacion,
            NumeroHabitacion = model.NumeroHabitacion,
            TipoHabitacion = model.TipoHabitacion,
            Capacidad = model.Capacidad,
            PrecioPorNoche = model.PrecioPorNoche,
            Estado = model.Estado.ToString(),
            Descripcion = model.Descripcion ?? string.Empty
        };
    }
}

