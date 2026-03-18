using Microsoft.AspNetCore.Mvc;
using ProyectoS4.DTO;
using ProyectoS4.Models;
using ProyectoS4.Services;

namespace ProyectoS4.Controllers
{
    
    [ApiController]

    
    [Route("api/[controller]")]
    public class DashboardController : ControllerBase
    {
       
        private readonly FirebaseService _firebaseService;

        // Constructor que recibe el servicio por inyección de dependencias
        public DashboardController(FirebaseService firebaseService)
        {
            _firebaseService = firebaseService;
        }

        // Endpoint GET que devuelve los datos del dashboard
        [HttpGet]
        public async Task<ActionResult<DashboardDto>> GetDashboard()
        {
            // Obtener todas las habitaciones desde Firestore
            var roomsSnapshot = await _firebaseService
                .GetCollection("rooms")
                .GetSnapshotAsync();

            // Obtener todas las reservaciones desde Firestore
            var reservationsSnapshot = await _firebaseService
                .GetCollection("reservations")
                .GetSnapshotAsync();

            // Total de habitaciones
            int totalHabitaciones = roomsSnapshot.Count;

            int disponibles = 0;
            int ocupadas = 0;

            // Total de ingresos
            decimal ingresoTotal = 0;

            // Total de reservaciones
            int totalReservaciones = reservationsSnapshot.Count;

            // Revisar el estado de cada habitación
            foreach (var doc in roomsSnapshot.Documents)
            {
                var data = doc.ToDictionary();

                if (data.TryGetValue("Estado", out var estadoValue))
                {
                    int estado = 0;

                    // Firestore puede devolver números como long o int
                    if (estadoValue is long l) estado = (int)l;
                    else if (estadoValue is int i) estado = i;

                    // Contar habitaciones disponibles y ocupadas
                    if ((RoomStatus)estado == RoomStatus.Disponible)
                        disponibles++;
                    else if ((RoomStatus)estado == RoomStatus.Ocupado)
                        ocupadas++;
                }
            }

            // Sumar los ingresos de todas las reservaciones
            foreach (var doc in reservationsSnapshot.Documents)
            {
                var data = doc.ToDictionary();

                if (data.TryGetValue("MontoTotal", out var montoValue))
                {
                    if (montoValue is double d) ingresoTotal += (decimal)d;
                    else if (montoValue is int i) ingresoTotal += i;
                    else if (montoValue is long l) ingresoTotal += l;
                }
            }

            // Crear el objeto DTO con los datos del dashboard
            var dashboard = new DashboardDto
            {
                TotalHabitaciones = totalHabitaciones,
                HabitacionesDisponibles = disponibles,
                HabitacionesOcupadas = ocupadas,
                TotalReservaciones = totalReservaciones,
                IngresoTotal = ingresoTotal
            };

            // Devolver los datos en formato JSON
            return Ok(dashboard);
        }
    }
}
