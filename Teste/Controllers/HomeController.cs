using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Teste.Controllers
{
    public class HomeController : Controller
    {
        // GET: Inicio

        public ActionResult Index()
        {
            ViewBag.Message = "Soma de valores";
            return View();
        }
        [HttpPost]
        public ActionResult Total(int numero1, int numero2)
        {
            int soma = 0;
            soma = numero1 + numero2;
            
            return Content(soma+"");
        }

    }
}