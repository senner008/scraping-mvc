using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using scraping_mvc.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace scraping_mvc.Controllers
{
   public interface IFoodItemsRepository 
   {  
       Task<IEnumerable<FoodItem>> GetFoods(QueryObject queryobject);
       Task<IEnumerable<LunchItem>> GetLunch(QueryObject queryobject);
    }
    
}