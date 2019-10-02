using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace scraping_mvc.Models
{
 public class FoodItem
    {
        [Key]
        public int Id {get; set;}
        public string Title { get; set; }
        public string Description { get; set; }
        public string Price { get; set; }
        public string Category { get; set; }
    }

}