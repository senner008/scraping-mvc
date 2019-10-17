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

        private readonly IFoodItemsRepository _foodItemsRepository;
        public FoodItemsController(IFoodItemsRepository foodItemsRepository) => _foodItemsRepository = foodItemsRepository;

        [HttpGet]
        [Route("defaultquery")]
        public IActionResult GetDefaultQuery()
        {
            return Ok(new QueryObject());
        }

        [HttpGet]
        [Route("Query/FoodItems")]
        public async Task<IActionResult> GetFoods([FromQuery] QueryObject queryobject)
        {
            return Ok(await _foodItemsRepository.GetFoods(queryobject));
        }

        [HttpGet]
        [Route("Query/LunchItems")]
        public async Task<IActionResult> GetLunch([FromQuery] QueryObject queryobject)
        {
            return Ok(await _foodItemsRepository.GetLunch(queryobject));
        }

    }
}
