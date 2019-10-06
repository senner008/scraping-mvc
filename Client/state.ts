import stateObject from "./stateInit";
import filterQuery from "./filter";
import renderList from "./renderList";

var state = stateObject({
    isLunch: false,
    priceMax: 10000,
    description: "",
    category: "",
    title: "",
    sorting: "category",
    sortIsDown : true,
}, renderList, filterQuery);

var localState = stateObject({
    isJs : false,
    foodlist : [],
    lunchlist : []
}, renderList, filterQuery);

export {
    state,
    localState
}