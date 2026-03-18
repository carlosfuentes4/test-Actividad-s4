using ProyectoS4.DTO;

namespace ProyectoS4.Services;

public interface IRoomService
{
    Task<List<HabitacionDto>> GetRooms();
    public  Task<HabitacionDto?> GetRoomById(string roomId);

    public Task<HabitacionDto> CreateRoom(HabitacionDto room);

    public  Task<HabitacionDto> UpdateRoom(string roomId, HabitacionDto room);

    public  Task DeleteRoom(string roomId);
}

