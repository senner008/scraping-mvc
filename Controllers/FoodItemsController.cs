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
        [Route("FoodItems/all")]
        public async Task<IActionResult> GetAllFoods()
        {
            var queryobject = new QueryObject();
            var res = await QueryResult.Process<FoodItem>(queryobject, _fooditemsContext);

            return Ok(res);
        }

        [HttpGet]
        [Route("LunchItems/all")]
        public async Task<IActionResult> GetAllLunch()
        {
            var queryobject = new QueryObject();
            var res = await QueryResult.Process<LunchItem>(queryobject, _fooditemsContext);

            return Ok(res);
        }


        [HttpPost]
        [Route("Query/FoodItems")]
        public async Task<IActionResult> GetFoods(QueryObject queryobject)
        {
            var res = await QueryResult.Process<FoodItem>(queryobject, _fooditemsContext);

            return Ok(res);
        }

        [HttpPost]
        [Route("Query/LunchItems")]
        public async Task<IActionResult> GetLunch(QueryObject queryobject)
        {
            var res = await QueryResult.Process<LunchItem>(queryobject, _fooditemsContext);

            return Ok(res);
        }


    }
}
