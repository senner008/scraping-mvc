namespace scraping_mvc.Controllers
{

    public enum SortingEnum {Category, Title, Price};
    public class QueryObject
    {

        public bool IsLunch { get; set; } = false;
        public int PriceMax { get; set; } = int.MaxValue;
        public string Description { get; set; } = "";
        public string Category { get; set; } = "";
        public string Title { get; set; } = "";
        public SortingEnum Sorting { get; set; } = SortingEnum.Title;
        public bool SortIsDown { get; set;} = true;
        
    }
}