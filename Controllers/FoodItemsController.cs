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
            _fooditemsContext.Database.EnsureCreated();
        }

        [HttpGet]
        [Route("defaultquery")]
        public IActionResult GetDefaultQuery()
        {
            var queryobject = new QueryObject();

            return Ok(queryobject);
        }


        [HttpGet]
        [Route("Query/FoodItems")]
        public async Task<IActionResult> GetFoods([FromQuery] QueryObject queryobject)
        {
            var res = await QueryResult.Process<FoodItem>(queryobject, _fooditemsContext);

            return Ok(res);
        }

        [HttpGet]
        [Route("Query/LunchItems")]
        public async Task<IActionResult> GetLunch([FromQuery] QueryObject queryobject)
        {
            var res = await QueryResult.Process<LunchItem>(queryobject, _fooditemsContext);

            return Ok(res);
        }

    }
}
