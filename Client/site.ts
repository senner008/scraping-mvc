// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function extractnumber(val : string) {
    if (!val) return Number.MAX_VALUE
    var match = val.toString().match(/\d+/);
    if (match) return Number(match[0]);
    return null;

}

function sortSelect () {
    var selectAll = document.querySelectorAll(".label-align-class.sort");
    Array.from(selectAll).forEach(select=> select.addEventListener("click", function (e : Event) {
       var elem = e.target as HTMLLabelElement; 
       var findName = elem.querySelector("input").name;
       queryObject.sorting = findName;
       renderlist(filterQuery())
    }))
}

function textInputSearch(selector, callback) {
    var input = document.querySelector(selector);
    input.addEventListener("input", function (e) {
        callback(e);
    });
}

function isLunch() {
    var input = document.querySelector("#lunchSelect");
    input.addEventListener("change", function (e : any) {
        
        var index = e.target.options[e.target.selectedIndex].value
        queryObject.isLunch = Number(index) === 1 ? false : true
        renderlist(filterQuery())
    });
}

var queryObject = {
    isLunch: false,
    priceMax: 10000,
    description: "",
    category: "",
    title: "",
    sorting: "category",
    sortIsDown : true,
}

var localParams = {
    isJs : false,
    foodlist : [],
    lunchlist : []
}


;(Array.prototype as any).reverseCondition = function () {
    if (!queryObject.sortIsDown) {
       return this.slice(0).reverse();
    }
    return this;
}

;(String.prototype as any).incNoCase = function (substr) {
    return this.toLowerCase().includes(substr.toLowerCase())
}


function reverseCondition() {
  
    var down = "fa-sort-amount-down-alt"
    var up =  "fa-sort-amount-up-alt"
    function isDown (elem) {
        return elem.classList[2].includes("down");
    }

    document.querySelector(".icon-toggle.sort").addEventListener("click", function (e: any) {
        var elem;
        if (e.target.childNodes.length > 0) {
            elem = e.target.querySelector("i");
        } else {
           elem = e.target;
        }
        elem.classList.replace( (isDown(elem) ? down : up) , (isDown(elem) ? up : down) )
        queryObject.sortIsDown =  isDown(elem);
        renderlist(filterQuery());
    })
   
}

function setDataSource() {
  
    var db = "fas fa-database"
    var js =  "fab fa-node-js"

    function isJs (elem) {
        return elem.classList[1].includes("js");
    }

    document.querySelector(".icon-toggle.jsdb").addEventListener("click", function (e : any) {
        var elem;
        if (e.target.childNodes.length > 0) {
            elem = e.target.querySelector("i");
        } else {
           elem = e.target;
        }
        elem.className = isJs(elem) ? db : js
        localParams.isJs =  isJs(elem);
        renderlist(filterQuery());

    })
   
}

function filterQuery() {
    return localParams.isJs ? filterQueryJS() : filterQueryDB((queryObject.isLunch ? "LunchItems" : "FoodItems"), queryObject);
}

function titleComparer(a,b) {
    const aNumber = extractnumber(a.title);
    const bNumber = extractnumber(b.title);
    const aTitle = a.title.toLowerCase();
    const bTitle = b.title.toLowerCase();
    return aNumber > bNumber ? 1 : aNumber === bNumber ? ((aTitle > bTitle) ? 1 : -1) : -1;
}

async function filterQueryJS() {
    var listname = queryObject.isLunch ? "lunchlist" : "foodlist";
    return localParams[listname] 
        .filter(p => p.price <= queryObject.priceMax)
        .filter(d => d.description.incNoCase(queryObject.description))
        .filter(d => d.category.incNoCase(queryObject.category))
        .filter(d => d.title.incNoCase(queryObject.title))
        .slice(0)
        .sort((a, b) => {
            const sortProp = queryObject.sorting;
            const aSort = (typeof a[sortProp] === "string") ? a[sortProp].toLowerCase() : a[sortProp];
            const bSort = (typeof b[sortProp] === "string") ? b[sortProp].toLowerCase() : b[sortProp];

            if (sortProp === "title") {
                return titleComparer(a,b);
            }
            if (sortProp === "category" || sortProp === "price" ) {
                return aSort > bSort ? 1 : aSort == bSort ? titleComparer(a,b) : -1
            }
         
        })
        .reverseCondition();
}

async function filterQueryDB(route : any, data :any = null) {
    var result = await postData("query/" + route , data);
    return result;
}

function formatToList() {
    
}

async function arrayToList(arr : any) {
    var resultarr = await arr;
    return resultarr.map((item : any) => "<tr><td class='li-category'>" + item.category + "</td>" + 
    "<td class='li-title'>" + item.title + "</td>" + 
    "<td class='li-description'>" + item.description + "</td>" + 
    "<td class='li-price'>" + item.price + "</td></tr>"
    );
}

async function renderlist(list: any) {

    var top = `<table class='table'>
    <thead>
        <tr>
            <th scope="col">Kategori</th>
            <th scope="col">Titel</th>
            <th scope="col">Indhold</th>
            <th scope="col">Max pris</th>
        </tr>
    </thead>
    <tbody>`;

    const  middle = (await arrayToList(list)).join("");
    console.log(middle)

    const bottom = "</tbody></table>";

    document.querySelector("#listUl").innerHTML = top + middle + bottom;
}

(async function init() {
    reverseCondition();
    setDataSource();
    localParams.foodlist = await fetch("FoodItems/all").then(res => res.json());
    localParams.lunchlist = await fetch("LunchItems/all").then(res => res.json());
    

    await renderlist(filterQuery());
    
    textInputSearch("#priceSearch", function (e) {

        queryObject.priceMax = e.target.value || 100000;
        renderlist(filterQuery())
    });
    textInputSearch("#descriptionSearch", function (e) {
        queryObject.description = e.target.value.toLowerCase();
        renderlist(filterQuery())
    });
    textInputSearch("#categorySearch", function (e) {
        queryObject.category = e.target.value.toLowerCase();
        renderlist(filterQuery())
    })
    textInputSearch("#titleSearch", function (e) {
        queryObject.title = e.target.value.toLowerCase();
        renderlist(filterQuery())
    })

    isLunch();
    sortSelect();
    document.querySelector("#process-information").innerHTML = "Loaded";

}());

async function postData(url = '', data = {}) {
    console.log(data)
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }
