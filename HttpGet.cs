using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace scraping_mvc
{
    public class HttpGet<T>
    {
        string BaseUrl;
        private string UrlParameters = ""; // ?api_key=123

        public HttpGet(string baseUrl, string urlParameters)
        {
            BaseUrl = baseUrl;
            UrlParameters = urlParameters;
        }

        public T Data { get; set; }
        public async Task<T> getJson()
        {

            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(BaseUrl);

            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            System.Console.WriteLine("Commence api request...");
            HttpResponseMessage response = new HttpResponseMessage();

            try {
                  response = client.GetAsync(UrlParameters).Result; 
            } catch (Exception ex) {
                  throw ex;
            }
            
            if (response.IsSuccessStatusCode)
            {
                System.Console.WriteLine("Success!");
                var result = await response.Content.ReadAsStringAsync(); 
                var data = JsonConvert.DeserializeObject<T>(result);
                Data = data;
            }
            else
            {
                System.Console.WriteLine("Request failed!");
                Console.WriteLine("{0} ({1})", (int)response.StatusCode, response.ReasonPhrase);
            }
            client.Dispose();
            return Data;
        }
    }
}

