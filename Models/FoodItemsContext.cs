using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace scraping_mvc.Models
{  
    public class FoodItemsContext : DbContext
    {
        public FoodItemsContext(DbContextOptions<FoodItemsContext> options)
            : base(options)
        {
            
        }
        public DbSet<FoodItem> FoodItems { get; set; }
    }
}
