using ProyectoS4.DTO;
using ProyectoS4.Models;

namespace ProyectoS4.Services;

public interface IRoomService
{
    Task<List<HabitacionDto>> GetRooms();

    Task<HabitacionDto?> GetRoomById(string roomId);

    Task<RoomModel> CreateRoom(RoomModel room);

    Task<RoomModel> UpdateRoom(string roomId, RoomModel room);

    Task DeleteRoom(string roomId);
}