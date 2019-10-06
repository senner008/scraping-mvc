import renderList from "./renderList";

export default function stateInit (obj, filterFunc) {
    return {
        setValue(prop, val)  {
            if (!obj.hasOwnProperty(prop)) {
                throw "property not in object";
            }
            obj[prop] = val;
            renderList(filterFunc());
        },
        getValue(prop) {
            if (!obj.hasOwnProperty(prop)) {
                throw "property not in object";
            }
            return obj[prop];
        },
        getObject() {
            return obj;
        }
    }
};

