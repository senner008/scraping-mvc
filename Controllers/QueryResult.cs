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

        public class CaseInsensitiveComparer<T> : IComparer<IFoodAbstract> {

            public SortingEnum Sortparam { get; set; }
            public CaseInsensitiveComparer (SortingEnum sortparam) {
                Sortparam = sortparam;
            }

            int TitleComparer<U> (U x, U y) where U : IFoodAbstract {
                return extractNumber(x.Title) > extractNumber(y.Title) ? 1 : extractNumber(x.Title) == extractNumber(y.Title) ?  String.Compare(x.Title,y.Title, true, new CultureInfo("da-DK")) : -1;
            }

            int CategoryComparer<U> (U x, U y)  where U : IFoodAbstract{
                return String.Compare(x.Category,y.Category, true, new CultureInfo("da-DK")) > 0 ? 1 : x.Category == y.Category ? TitleComparer(x, y) : -1;
            }

            int PriceComparer<U> (U x, U y) where U : IFoodAbstract {
                 return x.Price > y.Price ? 1 : x.Price == y.Price ? TitleComparer(x, y) : -1;
            }

            public int Compare (IFoodAbstract x, IFoodAbstract y)   {
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

        // public static IEnumerable<T> Result { get; set; }
        public async static Task<IEnumerable<T>> Process<T> (QueryObject obj, FoodItemsContext context, bool isFood) where T : FoodAbstract {
            
            IEnumerable<T> list =  isFood ? context.FoodItems as IEnumerable<T> : context.LunchItems as IEnumerable<T> ;
                list = list
                .Where (item => item.Price <= obj.PriceMax)
                .Where (item => item.Description.ToLower ().Contains (obj.Description.ToLower ()))
                .Where (item => item.Category.ToLower ().Contains (obj.Category.ToLower ()))
                .Where (item => item.Title.ToLower ().Contains (obj.Title.ToLower ()))
                .AsEnumerable ()
                .OrderBy(item => item, new CaseInsensitiveComparer<T> (obj.Sorting));

            return obj.SortIsDown ? list : list.Reverse ();

        }
    }
}