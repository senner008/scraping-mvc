import {state, localState} from "./state"
import titleComparer from "./comparers";
import postData from "./postData";

export default function filterQuery() {
    return localState.getValue("isJs") ? filterQueryJS() : filterQueryDB((state.getValue("isLunch") ? "LunchItems" : "FoodItems"))
}

;(String.prototype as any).incNoCase = function (substr: string) {
    return this.toLowerCase().includes(substr.toLowerCase())
}

;(Array.prototype as any).reverseCondition = function () {
    if (!state.getValue("sortIsDown")) {
       return this.slice(0).reverse();
    }
    return this;
}

async function filterQueryJS() {
    var listname = state.getValue("isLunch") ? "lunchlist" : "foodlist";
    return localState.getValue(listname)
        .filter(p => p.price <= state.getValue("priceMax"))
        .filter(d => d.description.incNoCase(state.getValue("description")))
        .filter(d => d.category.incNoCase(state.getValue("category")))
        .filter(d => d.title.incNoCase(state.getValue("title")))
        .slice(0)
        .sort((a, b) => {
            const sortProp = state.getValue("sorting")
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

async function filterQueryDB(route : any) {
    var result = await postData("query/" + route, state.getObject());
    return result;
}
