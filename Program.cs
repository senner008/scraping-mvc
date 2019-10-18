using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting.Internal;
using Microsoft.Extensions.Logging;

namespace scraping_mvc
{
    public class Program
    {
        public IHostingEnvironment HostingEnvironment { get; }
        public static void Main(string[] args)
        {
            var env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");

            if (env == "Heroku" || env == "Production") {
                 CreateWebHostBuilder(args).Build().Run();
            } else {
                 CreateWebHostBuilder_DEV(args).Build().Run();
            }
            
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();

        public static IWebHostBuilder CreateWebHostBuilder_DEV(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseUrls("https://*:5001")
                .UseStartup<Startup>();

       
    }
}
