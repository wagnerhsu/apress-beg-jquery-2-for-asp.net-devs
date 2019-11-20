using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using AjaxWithAspNetCore.Models;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace AjaxWithAspNetCore.Controllers.api
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private ILogger<ValuesController> _logger;
        public ValuesController(ILogger<ValuesController> logger)
        {
            _logger = logger;
        }
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new List<string> { "1", "2", "3" };
        }

        [HttpPost("JObject")]
        public TemperatureData ConvertComplexTypeUsingJObject(JObject obj)
        {
            TemperatureData data = JsonConvert.DeserializeObject<TemperatureData>(obj.ToString());
            TemperatureData resultData = new TemperatureData();
            _logger.LogDebug($"data:{JsonConvert.SerializeObject(resultData)}");
            switch (data.Scale)
            {
                case 'C':
                    resultData.Value = (data.Value * 1.8m) + 32;
                    resultData.Scale = 'F';
                    break;

                case 'F':
                    resultData.Value = (data.Value - 32) / 1.8m;
                    resultData.Scale = 'C';
                    break;
            }
            return resultData;
        }

        [HttpPost]
        public TemperatureData ConvertComplexType(TemperatureData data)
        {
            TemperatureData resultData = new TemperatureData();
            _logger.LogDebug($"data:{JsonConvert.SerializeObject(resultData)}");
            switch (data.Scale)
            {
                case 'C':
                    resultData.Value = (data.Value * 1.8m) + 32;
                    resultData.Scale = 'F';
                    break;

                case 'F':
                    resultData.Value = (data.Value - 32) / 1.8m;
                    resultData.Scale = 'C';
                    break;
            }
            return resultData;
        }
    }
}