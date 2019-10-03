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
        globalQuery.description = e.target.value
        renderlist(filterQuery())
    });
}


var globalQuery = {
    isLunch : false,
    priceMax : 0,
    description : ""
}

function filterQuery() {
    return (globalQuery.isLunch ? lunchlist : foodlist)
        .filter(p => extractnumber(p.price) <= globalQuery.priceMax)
        .filter(d => d.description.includes(globalQuery.description))
}

async function getList (url) {
    return fetch(url)
    .then(res => res.json())
}

function arrayToList (arr) {
    return arr.map(item => "<li class='list-group-item'>" + "<span class='li-title'>" + item.title + "</span>" + "<span>" + item.description + "</span>" + "<span>" + item.price + "</span>" + "</li>");
}

function renderlist (list) {
    document.querySelector("#listUl").innerHTML = (arrayToList(list)).join("")
}

$(document).ready(async function() {
    foodlist = await getList("/FoodItems");
    lunchlist = await getList("/LunchItems");

    renderlist(foodlist);
    priceSearch();
    descriptionSearch();

});
