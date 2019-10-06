import {sortSelect, textInputSearch, isLunch, toggleIcon } from "./addListeners";
import renderList from "./renderList"
import {state, localState} from "./state";
import filterQuery from "./filter";
import getLists from "./getLists"

;(async function init() {

    toggleIcon("fa-sort-amount-down-alt", "fa-sort-amount-up-alt", ".icon-toggle.sort", function (val) {
        state.setValue("sortIsDown", val);
    });
    await renderList(filterQuery());
    document.querySelector("#process-information").innerHTML = "Loaded";
    await getLists();

    toggleIcon("fab fa-node-js","fas fa-database",".icon-toggle.jsdb", function (val) {
        localState.setValue("isJs", val);
    });

    textInputSearch("#priceSearch", function (e) {
        state.setValue("priceMax", e.target.value || 100000);
    });
    textInputSearch("#descriptionSearch", function (e) {
        state.setValue("description", e.target.value.toLowerCase());
    });

    textInputSearch("#categorySearch", function (e) {
        state.setValue("category", e.target.value.toLowerCase());
    });

    textInputSearch("#titleSearch", function (e) {
        state.setValue("title", e.target.value.toLowerCase());
    });

    isLunch("#lunchSelect", function (e) {
        var index = e.target.options[e.target.selectedIndex].value
        state.setValue("isLunch", Number(index) === 1 ? false : true);
    });

    sortSelect(".label-align-class.sort", function (e) {
        var elem = e.target as HTMLLabelElement;
        var findName = elem.querySelector("input").name;
        state.setValue("sorting", findName);
    });

}());

