// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function extractnumber(val) {
    if (!val) return Number.MAX_VALUE
    return Number(val.match(/\d+/)[0]);
}

function priceSearch() {
    var input = document.querySelector("#priceSearch");
    input.addEventListener("input", function(e) {
        globalQuery.priceMax = extractnumber(e.target.value);
        renderlist(filterQuery())
    });
}

function descriptionSearch() {
    var input = document.querySelector("#descriptionSearch");
    input.addEventListener("input", function(e) {
        globalQuery.description = e.target.value.toLowerCase();
        renderlist(filterQuery())
    });
}

function categorySearch() {
    var input = document.querySelector("#categorySearch");
    input.addEventListener("input", function(e) {
        console.log("dsd")
        globalQuery.category = e.target.value.toLowerCase();
        renderlist(filterQuery())
    });
}



function isLunch() {
    var input = document.querySelector("#lunchSelect");
    input.addEventListener("change", function(e) {
        var index = e.target.options[e.target.selectedIndex].value
        globalQuery.isLunch = Number(index) === 1 ? false : true
        console.log(globalQuery.isLunch)
        renderlist(filterQuery())
    });
}

var globalQuery = {
    isLunch : false,
    priceMax : Number.MAX_VALUE,
    description : "",
    category: ""
}

function filterQuery() {
    return (globalQuery.isLunch ? lunchlist : foodlist)
        .filter(p => extractnumber(p.price) <= globalQuery.priceMax)
        .filter(d => d.description.includes(globalQuery.description))
        .filter(d => {
            console.log(d)
           return  d.category.includes(globalQuery.category)
        })
}

async function getList (url) {
    return fetch(url)
    .then(res => res.json())
    .then(res => {
        return res.map(item => {
            for (i in item) {
                item[i] = ((typeof item[i] == "string") ?  item[i].toLowerCase() : item[i]);
            }
            return item;
        })
    })
}

function arrayToList (arr) {
    return arr.map(item => "<li class='list-group-item'>" + "<span class='li-category'>" + item.category  + "</span>" + "-  " + "<span class='li-title'>" + item.title + "</span>" + "<span class='li-description'>" + item.description + "</span>" + "<span class='li-price'>" + item.price + "</span>" + "</li>");
}

function renderlist (list) {
    document.querySelector("#listUl").innerHTML = (arrayToList(list)).join("")
}

$(document).ready(async function() {
    foodlist = await getList("/FoodItems");
    lunchlist = await getList("/LunchItems");
    document.querySelector("#spinnerButton").remove();


    renderlist(foodlist);
    priceSearch();
    descriptionSearch();
    categorySearch();
    isLunch();

});
