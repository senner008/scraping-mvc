using Microsoft.EntityFrameworkCore;
using scraping_mvc.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace scraping_mvc.Controllers
{
    public class FoodItemsRepository : IFoodItemsRepository
   {
        private readonly FoodItemsContext _context;
        public FoodItemsRepository(FoodItemsContext context) {
            
            _context = context;
            _context.Database.EnsureCreated();
        }

        public async Task<IEnumerable<FoodItem>> GetFoods(QueryObject queryobject)
        {
            return await QueryResult.Process<FoodItem>(queryobject, _context);;     
        }

        public async Task<IEnumerable<LunchItem>> GetLunch(QueryObject queryobject)
        {
            return await QueryResult.Process<LunchItem>(queryobject, _context);       
        }
    }
    
}