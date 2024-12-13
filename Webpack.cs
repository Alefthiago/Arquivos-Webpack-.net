using Microsoft.AspNetCore.Mvc;

namespace WebApplicationWebPack.Components
{

    public class Webpack : ViewComponent
    {
        public IViewComponentResult Invoke(string? controller = null)
        {
            //string? controllerName = ViewContext.RouteData.Values["controller"]?.ToString().Replace("Controller", "");
            if (controller != "Geral" && !string.IsNullOrWhiteSpace(controller))
            {
                return View($"{controller}/index");
            }
            return View("Index");
        }
    }
}