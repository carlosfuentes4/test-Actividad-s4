using ProyectoS4.DTO;
using ProyectoS4.Models;
using Google.Cloud.Firestore;

namespace ProyectoS4.Services;

public class RoomService : IRoomService
{
    private readonly FirebaseService _firebase;

    public RoomService(FirebaseService firebase)
    {
        _firebase = firebase;
    }

    public async Task<List<HabitacionDto>> GetRooms()
    {
        var collection = _firebase.GetCollection("Rooms");

        var snapshot = await collection.GetSnapshotAsync();

        return snapshot.Documents
            .Select(doc =>
            {
                var room = doc.ConvertTo<RoomModel>();

                return new HabitacionDto
                {
                    IdHabitacion = doc.Id,
                    NumeroHabitacion = room.NumeroHabitacion,
                    TipoHabitacion = room.TipoHabitacion,
                    Capacidad = room.Capacidad
                };
            }).ToList();
    }

    public async Task<HabitacionDto?> GetRoomById(string roomId)
    {
        var collection = _firebase.GetCollection("Rooms");

        var document = await collection.Document(roomId).GetSnapshotAsync();

        if (!document.Exists)
            return null;

        var room = document.ConvertTo<RoomModel>();

        return new HabitacionDto
        {
            IdHabitacion = document.Id,
            NumeroHabitacion = room.NumeroHabitacion,
            TipoHabitacion = room.TipoHabitacion,
            Capacidad = room.Capacidad

        };
    }

    public async Task<RoomModel> CreateRoom(RoomModel room)
    {
        var collection = _firebase.GetCollection("Rooms");

        await collection.AddAsync(room);

        return room;
    }

    public async Task<RoomModel> UpdateRoom(string roomId, RoomModel room)
    {
        var collection = _firebase.GetCollection("Rooms");

        await collection.Document(roomId).SetAsync(room);

        return room;
    }

    public async Task DeleteRoom(string roomId)
    {
        var collection = _firebase.GetCollection("Rooms");

        await collection.Document(roomId).DeleteAsync();
    }
}