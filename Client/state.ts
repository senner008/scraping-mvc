import stateObject from "./stateInit";
import filterQuery from "./filter";
import renderList from "./renderList";

const getdefault = async () => await fetch("defaultquery").then(res => res.json());

var state;
var localState;

const State = (async function() {
    const obj = await getdefault();
    return stateObject(obj, renderList, filterQuery);
})();

const LocalState = (async function() {
    const obj = {
        isJs : false,
        foodlist : await fetch("Query/FoodItems").then(res => res.json()),
        lunchlist : await fetch("Query/LunchItems").then(res => res.json())
    }
    return stateObject(obj, renderList, filterQuery);
})();

const initStates = Promise.all([State, LocalState]).then(function(values) {
    state = values[0];
    localState = values[1];
});


export {
    state,
    localState,
    initStates
}