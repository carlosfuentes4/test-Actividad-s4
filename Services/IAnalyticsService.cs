using ProyectoS4.DTO;

namespace ProyectoS4.Services;

public interface IAnalyticsService
{
    Task<AnalyticsDto> GetAnalytics();
}
