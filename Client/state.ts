import stateObject from "./stateInit";
import filterQuery from "./filter";

var state = stateObject({
    isLunch: false,
    priceMax: 10000,
    description: "",
    category: "",
    title: "",
    sorting: "category",
    sortIsDown : true,
}, filterQuery);

var localState = stateObject({
    isJs : false,
    foodlist : [],
    lunchlist : []
}, filterQuery);

export {
    state,
    localState
}