// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function extractnumber(val) {
    if (!val) return Number.MAX_VALUE
    var match = val.toString().match(/\d+/);
    if (match) return Number(match[0]);
    return null;

}

function sortSelect () {
    var selectAll = document.querySelectorAll(".label-align-class.sort");
    Array.from(selectAll).forEach(select=> select.addEventListener("click", function (e) {
       var findName = e.target.querySelector("input").name;
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
    input.addEventListener("change", function (e) {
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


Array.prototype.reverseCondition = function () {
    if (!queryObject.sortIsDown) {
       return this.slice(0).reverse();
    }
    return this;
}


function reverseCondition() {
  
    var down = "fa-sort-amount-down-alt"
    var up =  "fa-sort-amount-up-alt"
    function isDown (elem) {
        return elem.classList[2].includes("down");
    }

    document.querySelector(".icon-toggle.sort").addEventListener("click", function (e) {
        console.log('clicking')
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

    document.querySelector(".icon-toggle.jsdb").addEventListener("click", function (e) {
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
    console.log("filter query")
    return localParams.isJs ? filterQueryJS() : filterQueryDB();
}

function titleComparer(a,b) {
    return extractnumber(a.title) > extractnumber(b.title) ? 1 : extractnumber(a.title) === extractnumber(b.title) ? ((a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1) : -1;
}

async function filterQueryJS() {
    console.log("filter js")
    var listname = queryObject.isLunch ? "foodlist" : "lunchlist";
    // TODO : Get list with default query object
    if (!localParams[listname].length){
        console.log("fetching from db...")
        localParams[listname] = await filterQueryDB();
    } 
    return localParams[listname] 
        .filter(p => p.price <= queryObject.priceMax)
        .filter(d => d.description.includes(queryObject.description))
        .filter(d => d.category.includes(queryObject.category))
        .filter(d => d.title.includes(queryObject.title))
        .slice(0).sort((a, b) => {
            const sortProp = queryObject.sorting;
            if (sortProp === "title") {
                return titleComparer(a,b);
            }
            if (sortProp === "category") {
                return a[sortProp].toLowerCase() > b[sortProp].toLowerCase() ? 1 : a[sortProp].toLowerCase() == b[sortProp].toLowerCase() ? titleComparer(a,b) : -1
            }
            return a[sortProp] > b[sortProp] ? 1 : a[sortProp] == b[sortProp] ? titleComparer(a,b) : -1
        })
        .reverseCondition();

}

async function filterQueryDB() {
    console.log("filter db")
    var result = await postData("query/" + (queryObject.isLunch ? "LunchItems" : "FoodItems") , queryObject);
    return result;
}


async function arrayToList(arr) {
    var resultarr = await arr;
    return resultarr.map(item => "<li class='list-group-item'>" + "<span class='li-category'>" + item.category + "</span>" + "-  " + "<span class='li-title'>" + item.title + "</span>" + "<span class='li-description'>" + item.description + "</span>" + "<span class='li-price'>" + item.price + "</span>" + "</li>");
}

async function renderlist(list) {

    document.querySelector("#listUl").innerHTML = (await arrayToList(list)).join("")
}

$(document).ready(async function () {
    reverseCondition();
    setDataSource();
    // foodlist = await getList("/FoodItems");
    // lunchlist = await getList("/LunchItems");
    document.querySelector("#spinnerButton").remove();


    renderlist(filterQuery());
    
    textInputSearch("#priceSearch", function (e) {

        queryObject.priceMax = e.target.value;
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
        console.log('hello')
        queryObject.title = e.target.value.toLowerCase();
        renderlist(filterQuery())
    })

    isLunch();
    sortSelect();

    // var result = await postData("query/FoodItems", queryObject);
    // console.log(result);



});

async function postData(url = '', data = {}) {
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
