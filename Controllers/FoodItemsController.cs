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

    public class FoodItemsController : ControllerBase
    {

         private readonly FoodItemsContext _fooditemsContext;
        public FoodItemsController( FoodItemsContext foodItemsContext)
        {
            _fooditemsContext = foodItemsContext;
            _fooditemsContext.Database.EnsureCreated();
        }


        [HttpPost]
        [Route("Query/FoodItems")]
        public async Task<IActionResult> GetAllFoods(QueryObject queryobject)
        {
            var res = await QueryResult.Process<FoodItem>(queryobject, _fooditemsContext, true);

            return Ok(res);
        }

        [HttpPost]
        [Route("Query/LunchItems")]
        public async Task<IActionResult> GetAllLunch(QueryObject queryobject)
        {
            var res = await QueryResult.Process<LunchItem>(queryobject, _fooditemsContext, false);

            return Ok(res);
        }


    }
}
