using System.Collections.Generic;
using Newtonsoft.Json;

namespace scraping_mvc
{
 public class DataObject
    {
        [JsonProperty("title")]
        public string Title { get; set; }
        [JsonProperty("description")]
        public string Description { get; set; }
        [JsonProperty("price")]
        public string Price { get; set; }
    }
    public class Foods
    {
        [JsonProperty("title")]
        public string Title { get; set; }
        [JsonProperty("content")]
        public IEnumerable<DataObject> Content { get; set; }
    }
}