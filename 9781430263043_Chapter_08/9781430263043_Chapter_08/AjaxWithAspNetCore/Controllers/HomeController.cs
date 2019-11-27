using AjaxWithAspNetCore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Diagnostics;

namespace AjaxWithAspNetCore.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public ActionResult IndexSimpleType()
        {
            return View();
        }

        public ActionResult IndexComplexType()
        {
            return View();
        }

        [HttpPost]
        public JsonResult ConvertSimpleType(decimal t, char scale)
        {
            _logger.LogDebug($"t:{t},scale:{scale}");
            switch (scale)
            {
                case 'C':
                    t = (t * 1.8m) + 32;
                    break;

                case 'F':
                    t = (t - 32) / 1.8m;
                    break;
            }
            return Json(t);
        }

        [HttpPost]
        public JsonResult ConvertToString(string data)
        {
            return Json(data);
        }
        [HttpPost()]
        public JsonResult ConvertComplexTypeFromBody(TemperatureData data)
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
            return Json(resultData);
        }

        [HttpPost]
        public JsonResult ConvertComplexType(TemperatureData data)
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
            return Json(resultData);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}