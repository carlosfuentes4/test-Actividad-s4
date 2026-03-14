namespace ProyectoS4.Services;
using ProyectoS4.DTO;
using ProyectoS4.Services;

    public interface IRoomService
{
    Task<List<HabitacionDto>> GetRooms();
    Task<HabitacionDto?> GetRoomById(string roomId);
    Task<HabitacionDto> CreateRoom(HabitacionDto room);
    Task<HabitacionDto> UpdateRoom(string roomId, HabitacionDto room);
    Task DeleteRoom(string roomId);

}

