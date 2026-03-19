using Microsoft.AspNetCore.Mvc;
using ProyectoS4.Services;

namespace ProyectoS4.Controllers;

[ApiController]
[Route("api/analytics")]
public class AnalyticsController : ControllerBase
{
    private readonly IAnalyticsService _analyticsService;

    public AnalyticsController(IAnalyticsService analyticsService)
    {
        _analyticsService = analyticsService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAnalytics()
    {
        var analytics = await _analyticsService.GetAnalytics();
        return Ok(analytics);
    }
}
