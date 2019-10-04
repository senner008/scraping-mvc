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
    var selectAll = document.querySelectorAll(".sorting-class");
    Array.from(selectAll).forEach(select=> select.addEventListener("click", function (e) {
       var findName = e.target.querySelector("input").name;
       globalQuery.sorting = findName;
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
        globalQuery.isLunch = Number(index) === 1 ? false : true
        renderlist(filterQuery())
    });
}

var globalQuery = {
    isLunch: false,
    priceMax: Number.MAX_VALUE,
    description: "",
    category: "",
    title: "",
    sorting: "category",
    sortIsDown : true
}

function reverseCondition() {

    Array.prototype.reverseCondition = function () {
        if (!globalQuery.sortIsDown) {
           return this.slice(0).reverse();
        }
        return this;
    }
    var down = "fa-sort-amount-down-alt"
    var up =  "fa-sort-amount-up-alt"
    function isDown (elem) {
        return elem.classList[2].includes("down");
    }

    document.querySelector(".sort-direction").addEventListener("click", function (e) {
        var elem;
        if (e.target.childNodes.length > 0) {
            elem = e.target.querySelector("i");
        } else {
           elem = e.target;
        }
        elem.classList.replace( (isDown(elem) ? down : up) , (isDown(elem) ? up : down) )
        globalQuery.sortIsDown =  isDown(elem);
        renderlist(filterQuery());
    })
   
}



function filterQuery() {
    return (globalQuery.isLunch ? lunchlist : foodlist)
        .filter(p => p.price <= globalQuery.priceMax)
        .filter(d => d.description.includes(globalQuery.description))
        .filter(d => d.category.includes(globalQuery.category))
        .filter(d => d.title.includes(globalQuery.title))
        .slice(0).sort((a, b) => {
            const sortProp = globalQuery.sorting;
            if (extractnumber(a[sortProp])) {
                return extractnumber(a[sortProp]) - extractnumber(b[sortProp]);
            }
            return (a[sortProp] > b[sortProp]) ? 1 : -1
        })
        .reverseCondition();

}

async function getList(url) {
    return fetch(url)
        .then(res => res.json())
        .then(res => {
            return res.map(item => {
                for (i in item) {
                    item[i] = ((typeof item[i] == "string") ? item[i].toLowerCase() : item[i]);
                    if (i === "price") {
                        item[i] = extractnumber(item[i]);
                    }
                    if (i === "title") {
                        if (!(extractnumber(item[i]))) {
                            item[i] = "0. " + item[i];
                        };
                    }
                }
                return item;
            })
        })
}

function arrayToList(arr) {
    return arr.map(item => "<li class='list-group-item'>" + "<span class='li-category'>" + item.category + "</span>" + "-  " + "<span class='li-title'>" + item.title + "</span>" + "<span class='li-description'>" + item.description + "</span>" + "<span class='li-price'>" + item.price + "</span>" + "</li>");
}

function renderlist(list) {
    document.querySelector("#listUl").innerHTML = (arrayToList(list)).join("")
}

$(document).ready(async function () {
    reverseCondition();
    foodlist = await getList("/FoodItems");
    lunchlist = await getList("/LunchItems");
    document.querySelector("#spinnerButton").remove();


    renderlist(filterQuery());
    textInputSearch("#priceSearch", function (e) {
        globalQuery.priceMax = extractnumber(e.target.value);
        renderlist(filterQuery())
    });
    textInputSearch("#descriptionSearch", function (e) {
        globalQuery.description = e.target.value.toLowerCase();
        renderlist(filterQuery())
    });
    textInputSearch("#categorySearch", function (e) {
        globalQuery.category = e.target.value.toLowerCase();
        renderlist(filterQuery())
    })
    textInputSearch("#titleSearch", function (e) {
        console.log('hello')
        globalQuery.title = e.target.value.toLowerCase();
        renderlist(filterQuery())
    })

    isLunch();
    sortSelect();



});
