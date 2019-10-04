using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using scraping_mvc.Models;

namespace scraping_mvc.Controllers {

    public static class MyExtensions {
        public static object GetProperty<T> (this T obj, string name) where T : class {
            Type t = typeof (T);
            return t.GetProperty (name).GetValue (obj, null);
        }
    }
    public static class QueryResult {

        public static int extractNumber (string str) {
            string val = Regex.Match (str, @"\d+").Value;
            return val != "" ? Convert.ToInt32 (val) : 0;
        }

        public class CaseInsensitiveComparer : IComparer<FoodItem> {

            public SortingEnum Sortparam { get; set; }
            public CaseInsensitiveComparer (SortingEnum sortparam) {
                Sortparam = sortparam;
            }

            int TitleComparer (FoodItem x, FoodItem y) {
                return extractNumber(x.Title) > extractNumber(y.Title) ? 1 : extractNumber(x.Title) == extractNumber(y.Title) ? x.Title.ToLower().CompareTo (y.Title.ToLower()) : -1;
            }

            int CategoryComparer (FoodItem x, FoodItem y) {
                return x.Category.CompareTo(y.Category) > 0 ? 1 : x.Category == y.Category ? TitleComparer(x, y) : -1;
            }

            int PriceComparer (FoodItem x, FoodItem y) {
                 return x.Price > y.Price ? 1 : x.Price == y.Price ? TitleComparer(x, y) : -1;
            }

            public int Compare (FoodItem x, FoodItem y) {
                if (Sortparam == SortingEnum.Category) {
                    return CategoryComparer(x,y);
                } else if (Sortparam == SortingEnum.Price) {
                    return PriceComparer(x,y);
                }  else if (Sortparam == SortingEnum.Title) {
                    return TitleComparer(x, y);
                } else {
                    throw new NotSupportedException ();
                }
            }
        }

        public static IEnumerable<FoodItem> Result { get; set; }
        public async static Task<IEnumerable<FoodItem>> Process (QueryObject obj, FoodItemsContext context) {
            var list = context.FoodItems.Where (item => item.Price <= obj.PriceMax)
                .Where (item => item.Description.ToLower ().Contains (obj.Description.ToLower ()))
                .Where (item => item.Category.ToLower ().Contains (obj.Category.ToLower ()))
                .Where (item => item.Title.ToLower ().Contains (obj.Title.ToLower ()))
                .AsEnumerable ()
                .OrderBy (item => item, new CaseInsensitiveComparer (obj.Sorting));

            return obj.SortIsDown ? list : list.Reverse ();

        }
    }
}