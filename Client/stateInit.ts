import renderList from "./renderList";

export default function stateInit (obj, renderer, filterFunc) {
    const objDefault = JSON.parse(JSON.stringify(obj));

    return {
        isDefault(prop) {
            if (!obj.hasOwnProperty(prop)) {
                throw "property not in object";
            }
            return obj[prop] === objDefault[prop];
        },
        setValue(prop, val)  {
            if (!obj.hasOwnProperty(prop)) {
                throw "property not in object";
            }
            obj[prop] = val;
            renderer(filterFunc());
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

