using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace scraping_mvc.Models {
    public interface IFoodAbstract
    {
        int Id { get; set; }
        string Title { get; set; }
        string Description { get; set; }
        int Price { get; set; }
        string Category { get; set; }
    }

    public abstract class FoodAbstract : IFoodAbstract
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
        public string Category { get; set; }
    }
    public class FoodItem : FoodAbstract {
      
    }

    public class LunchItem : FoodAbstract {
       
    }

}