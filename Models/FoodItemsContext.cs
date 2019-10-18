using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using scraping_mvc.Models;
using static System.Console;
using static scraping_mvc.Program;

namespace scraping_mvc {

    public class FoodItemsContext : DbContext {
        public IHostingEnvironment Env { get; set; }
        public FoodItemsContext (DbContextOptions<FoodItemsContext> options, IHostingEnvironment env) : base (options) {
            Env = env;
        }

        public DbSet<FoodItem> FoodItems { get; set; }
        public DbSet<LunchItem> LunchItems { get; set; }

        protected override async void OnModelCreating (ModelBuilder modelBuilder) {
       
            // if in development or on Heroku
            if (Environment.GetEnvironmentVariable ("ASPNETCORE_ENVIRONMENT") == "Heroku") {

                await Seed<FoodItem> ("https://senner-puppeteer-app.herokuapp.com/foods", "");
                await Seed<LunchItem> ("https://senner-puppeteer-app.herokuapp.com/lunch", "");
            }
            // else if (Env.IsDevelopment () ) {
            //     await Seed<FoodItem> ("http://localhost:1234/foods", "");
            //     await Seed<LunchItem> ("http://localhost:1234/lunch", "");
            // }

                async Task Seed<T> (string url, string query) where T : class, IFoodAbstract, new() {
                    List<T> FoodItemsLocal = new List<T> ();
                    var httpGet = new HttpGet<IEnumerable<Foods>> (url, query);
                    try {
                        var foods = await httpGet.getJson ();
                        var id = 1;
                        foods.ToList ().ForEach (foodType => {
                            foodType.Content.ToList ().ForEach (food => {
                                T fooditem = new T () { Id = id++, Title = food.Title, Description = food.Description, Price = Convert.ToInt32(food.Price), Category = foodType.Title };
                                FoodItemsLocal.Add (fooditem);
                            });
                        });
                        modelBuilder.Entity<T> ().HasData (FoodItemsLocal);

                    } catch (Exception ex) {
                        WriteLine (ex.Message);
                        WriteLine ("Exception has ocurred. Could not retrieve data");
                    }

                }

          

        }
    }
}