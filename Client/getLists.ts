import {localState} from "./state";

export default async function getLists() {
    var foodlist = await fetch("FoodItems/all").then(res => res.json());
    var lunchlist = await fetch("LunchItems/all").then(res => res.json());
    localState.setValue("foodlist", foodlist);
    localState.setValue("lunchlist", lunchlist);
} 

