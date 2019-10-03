using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace scraping_mvc.Models {

    public abstract class FoodAbstract
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Price { get; set; }
        public string Category { get; set; }
    }
    public class FoodItem : FoodAbstract {
      
    }

    public class LunchItem : FoodAbstract {
       
    }

}