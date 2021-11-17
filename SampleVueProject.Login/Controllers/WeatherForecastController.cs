using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SampleVueProject.Login.Model;

namespace SampleVueProject.Login.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public IEnumerable<WeatherForecast> GetYdk()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [HttpGet]
        public IActionResult  Get()
        {
            Result<LoginResponse> result = new Result<LoginResponse> { RequestTime = DateTime.Now };
            Error error = new Error { ErrorCode="errro_code",ErrorMessage="bu bir hata mesajıdır değil mi ??",ShowUser=true};



            LoginResponse loginResponse = new LoginResponse();
            loginResponse.Name = "Okan";
            loginResponse.Surname = "Öz";
            loginResponse.Token = "aeakaf38ufananabdıavuabvahvuabvuw87eqyryqr8gfcbadvjkaeq78wfubavjsv";

           
            result.Data = loginResponse;
            result.Error = error;
            result.IsSuccess = false;
            result.RequestId = Guid.NewGuid().ToString();

            result.ResponseTime = DateTime.Now;
            ObjectResult objectResult = new ObjectResult(result);
            objectResult.StatusCode = 500;
      

            return objectResult;
        }

    }
}
