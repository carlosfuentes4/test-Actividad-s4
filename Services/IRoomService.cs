namespace ProyectoS4.Services
using ProyectoS4.DTO;
using ProyectoS4.Services;
{
    public interface IRoomService
    {
    Task<List<RoomDto>> GetRooms();
    Task<RoomDto?> GetRoomById(string roomId);
    Task<Room> CreateRoom(Room room);
    Task<Room> UpdateRoom(string roomId, Room room);
    Task DeleteRoom(string roomId);

}
}
