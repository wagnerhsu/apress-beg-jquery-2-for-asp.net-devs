﻿using CallingActionMethodUsingAjax.Models;
using System.Web.Mvc;

namespace CallingActionMethodUsingAjax.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index() => View();

        public ActionResult IndexSimpleType()
        {
            return View();
        }

        public ActionResult IndexComplexType()
        {
            return View();
        }

        public JsonResult ConvertSimpleType(decimal t, char scale)
        {
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

        public JsonResult ConvertComplexType(TemperatureData data)
        {
            TemperatureData resultData = new TemperatureData();
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
    }
}