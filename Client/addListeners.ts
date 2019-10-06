export function sortSelect (selector, callback) {
    var selectAll = document.querySelectorAll(selector);
    Array.from(selectAll).forEach(select=> select.addEventListener("click", function (e : Event) {
        callback(e)
    }))
}

export function textInputSearch(selector, callback) {
    var input = document.querySelector(selector);
    input.addEventListener("input", function (e) {
        callback(e);
    });
}

export function isLunch(selector, callback) {
    var input = document.querySelector(selector);
    input.addEventListener("change", function (e : any) {     
     callback(e)
    });
}

export function toggleIcon(first, second, selector, callback) {
    const isFirst =  (elem) => elem.className.includes(first);
    document.querySelector(selector).addEventListener("click", function (e: any) {
        // determine clicking target
        const elem = e.target.childNodes.length > 0 ? e.target.querySelector("i") : e.target
        const newClass = elem.className.replace( (isFirst(elem) ? first : second) , (isFirst(elem) ? second : first) );
        elem.className = newClass;
        callback(isFirst(elem))
    })
}
