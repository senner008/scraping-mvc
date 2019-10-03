using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using scraping_mvc.Models;

namespace scraping_mvc.Controllers
{
    [ApiController]
    public class FoodItemsController : ControllerBase
    {

         private readonly FoodItemsContext _fooditemsContext;
        public FoodItemsController( FoodItemsContext foodItemsContext)
        {
            _fooditemsContext = foodItemsContext;
        }
        [HttpGet]
        [Route("Fooditems")]
        public async Task<IActionResult> GetAll()
        {
            System.Console.WriteLine("hello");
            var firstCategory = await _fooditemsContext.FoodItems.ToListAsync();  
            return Ok(firstCategory);
        }


    }
}
