using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using scraping_mvc.Models;

namespace scraping_mvc.Controllers {

    // public static class MyExtensions {
    //     public static object GetProperty<T> (this T obj, string name) where T : class {
    //         Type t = typeof (T);
    //         return t.GetProperty (name).GetValue (obj, null);
    //     }
    // }
    public static class QueryResult {

        public static int extractNumber (string str) {
            string val = Regex.Match (str, @"\d+").Value;
            return val != "" ? Convert.ToInt32 (val) : 0;
        }

        public class FoodPropsComparer<T> : IComparer<IFoodAbstract> {

            // public SortingEnum Sortparam { get; set; }
            // public FoodPropsComparer (SortingEnum sortparam) {
            //     Sortparam = sortparam;
            // }

            // int StringComparer (string x, string y) {
            //     return String.Compare (x, y, true, new CultureInfo ("da-DK"));
            // }

            // int TitleComparer<U> (U x, U y) where U : IFoodAbstract {
            //     var xNumber = extractNumber (x.Title);
            //     var yNumber = extractNumber (y.Title);
            //     return xNumber > yNumber ? 1 : xNumber == yNumber ? StringComparer(x.Title, y.Title) : -1;
            // }

            // int CategoryComparer<U> (U x, U y) where U : IFoodAbstract {
            //     return StringComparer(x.Category, y.Category) > 0 ? 1 : x.Category == y.Category ? TitleComparer (x, y) : -1;
            // }

            // int PriceComparer<U> (U x, U y) where U : IFoodAbstract {
            //     return x.Price > y.Price ? 1 : x.Price == y.Price ? TitleComparer (x, y) : -1;
            // }

            public int Compare (IFoodAbstract x, IFoodAbstract y) {
                // if (Sortparam == SortingEnum.Category) {
                //     return CategoryComparer (x, y);
                // } else if (Sortparam == SortingEnum.Price) {
                //     return PriceComparer (x, y);
                // } else if (Sortparam == SortingEnum.Title) {
                //     return TitleComparer (x, y);
                // } else {
                //     throw new NotSupportedException ();
                // }
                return 1;
            }
        }

        // public static IEnumerable<T> Result { get; set; }
        public async static Task<IEnumerable<T>> Process<T> (QueryObject obj, FoodItemsContext context) where T : FoodAbstract {

            
            IEnumerable<T> newlist = context.Set<T>()
                .Where (item => item.Price <= obj.PriceMax)
                .Where (item => item.Description.ToLower ().Contains (obj.Description.ToLower ()))
                .Where (item => item.Category.ToLower ().Contains (obj.Category.ToLower ()))
                .Where (item => item.Title.ToLower ().Contains (obj.Title.ToLower ()))
                // still sorts in memory
                .OrderBy (item => obj.Sorting == SortingEnum.Title ? 
                    extractNumber((string)item.GetType().GetProperty(obj.Sorting.ToString()).GetValue(item, null)) : 
                    item.GetType().GetProperty(obj.Sorting.ToString()).GetValue(item, null))
                .ThenBy(item => item.GetType().GetProperty("Title").GetValue(item, null));
                

              return obj.SortIsDown ? newlist : newlist.Reverse ();

        }
    }
}