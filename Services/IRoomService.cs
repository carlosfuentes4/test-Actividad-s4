using ProyectoS4.DTOs;
using ProyectoS4.Models;

namespace ProyectoS4.Services;

public interface IRoomService
{
    Task<List<RoomDto>> GetAllRooms();
    Task<RoomDto?> GetRoomById(string roomId);
    Task<RoomModel> CreateRoom(RoomDto dto);
    Task<RoomModel> UpdateRoom(string roomId, RoomDto dto);
    Task DeleteRoom(string roomId);
}
