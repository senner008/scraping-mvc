!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){var n=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function c(t){try{a(r.next(t))}catch(t){i(t)}}function s(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,s)}a((r=r.apply(t,e||[])).next())}))};function r(t){if(!t)return Number.MAX_VALUE;var e=t.toString().match(/\d+/);return e?Number(e[0]):null}function o(t,e){document.querySelector(t).addEventListener("input",(function(t){e(t)}))}var i={isLunch:!1,priceMax:1e4,description:"",category:"",title:"",sorting:"category",sortIsDown:!0},c={isJs:!1,foodlist:[],lunchlist:[]};function s(){return c.isJs?function(){return n(this,void 0,void 0,(function*(){var t=i.isLunch?"lunchlist":"foodlist";return c[t].filter(t=>t.price<=i.priceMax).filter(t=>t.description.incNoCase(i.description)).filter(t=>t.category.incNoCase(i.category)).filter(t=>t.title.incNoCase(i.title)).slice(0).sort((t,e)=>{const n=i.sorting,r="string"==typeof t[n]?t[n].toLowerCase():t[n],o="string"==typeof e[n]?e[n].toLowerCase():e[n];return"title"===n?a(t,e):"category"===n||"price"===n?r>o?1:r==o?a(t,e):-1:void 0}).reverseCondition()}))}():function(t,e=null){return n(this,void 0,void 0,(function*(){return yield function(t="",e={}){return n(this,void 0,void 0,(function*(){console.log(e);const n=yield fetch(t,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify(e)});return yield n.json()}))}("query/"+t,e)}))}(i.isLunch?"LunchItems":"FoodItems",i)}function a(t,e){const n=r(t.title),o=r(e.title),i=t.title.toLowerCase(),c=e.title.toLowerCase();return n>o?1:n===o&&i>c?1:-1}function l(t){return n(this,void 0,void 0,(function*(){const e=(yield function(t){return n(this,void 0,void 0,(function*(){return(yield t).map(t=>"<tr><td class='li-category'>"+t.category+"</td><td class='li-title'>"+t.title+"</td><td class='li-description'>"+t.description+"</td><td class='li-price'>"+t.price+"</td></tr>")}))}(t)).join("");console.log(e);document.querySelector("#listUl").innerHTML='<table class=\'table\'>\n    <thead>\n        <tr>\n            <th scope="col">Category</th>\n            <th scope="col">Title</th>\n            <th scope="col">Dexcription</th>\n            <th scope="col">Price</th>\n        </tr>\n    </thead>\n    <tbody>'+e+"</tbody></table>"}))}Array.prototype.reverseCondition=function(){return i.sortIsDown?this:this.slice(0).reverse()},String.prototype.incNoCase=function(t){return this.toLowerCase().includes(t.toLowerCase())},function(){n(this,void 0,void 0,(function*(){var t;!function(){var t="fa-sort-amount-down-alt",e="fa-sort-amount-up-alt";function n(t){return t.classList[2].includes("down")}document.querySelector(".icon-toggle.sort").addEventListener("click",(function(r){var o;(o=r.target.childNodes.length>0?r.target.querySelector("i"):r.target).classList.replace(n(o)?t:e,n(o)?e:t),i.sortIsDown=n(o),l(s())}))}(),function(){function t(t){return t.classList[1].includes("js")}document.querySelector(".icon-toggle.jsdb").addEventListener("click",(function(e){var n;(n=e.target.childNodes.length>0?e.target.querySelector("i"):e.target).className=t(n)?"fas fa-database":"fab fa-node-js",c.isJs=t(n),l(s())}))}(),c.foodlist=yield fetch("FoodItems/all").then(t=>t.json()),c.lunchlist=yield fetch("LunchItems/all").then(t=>t.json()),l(s()),o("#priceSearch",(function(t){i.priceMax=t.target.value||1e5,l(s())})),o("#descriptionSearch",(function(t){i.description=t.target.value.toLowerCase(),l(s())})),o("#categorySearch",(function(t){i.category=t.target.value.toLowerCase(),l(s())})),o("#titleSearch",(function(t){i.title=t.target.value.toLowerCase(),l(s())})),document.querySelector("#lunchSelect").addEventListener("change",(function(t){var e=t.target.options[t.target.selectedIndex].value;i.isLunch=1!==Number(e),l(s())})),t=document.querySelectorAll(".label-align-class.sort"),Array.from(t).forEach(t=>t.addEventListener("click",(function(t){var e=t.target.querySelector("input").name;i.sorting=e,l(s())}))),document.querySelector("#process-information").innerHTML="Loaded"}))}()}]);