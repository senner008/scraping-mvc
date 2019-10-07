/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Client/site.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Client/addListeners.ts":
/*!********************************!*\
  !*** ./Client/addListeners.ts ***!
  \********************************/
/*! exports provided: sortSelect, textInputSearch, isLunch, toggleIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortSelect\", function() { return sortSelect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"textInputSearch\", function() { return textInputSearch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isLunch\", function() { return isLunch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleIcon\", function() { return toggleIcon; });\nfunction sortSelect(selector, callback) {\r\n    var selectAll = document.querySelectorAll(selector);\r\n    Array.from(selectAll).forEach(select => select.addEventListener(\"click\", function (e) {\r\n        callback(e);\r\n    }));\r\n}\r\nfunction textInputSearch(selector, callback) {\r\n    var input = document.querySelector(selector);\r\n    input.addEventListener(\"input\", function (e) {\r\n        callback(e);\r\n    });\r\n}\r\nfunction isLunch(selector, callback) {\r\n    var input = document.querySelector(selector);\r\n    input.addEventListener(\"change\", function (e) {\r\n        callback(e);\r\n    });\r\n}\r\nfunction toggleIcon(first, second, selector, callback) {\r\n    const isFirst = (elem) => elem.className.includes(first);\r\n    document.querySelector(selector).addEventListener(\"click\", function (e) {\r\n        // determine clicking target\r\n        const elem = e.target.childNodes.length > 0 ? e.target.querySelector(\"i\") : e.target;\r\n        const newClass = elem.className.replace((isFirst(elem) ? first : second), (isFirst(elem) ? second : first));\r\n        elem.className = newClass;\r\n        callback(isFirst(elem));\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./Client/addListeners.ts?");

/***/ }),

/***/ "./Client/comparers.ts":
/*!*****************************!*\
  !*** ./Client/comparers.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return titleComparer; });\nfunction extractnumber(val) {\r\n    if (!val)\r\n        return Number.MAX_VALUE;\r\n    var match = val.toString().match(/\\d+/);\r\n    if (match)\r\n        return Number(match[0]);\r\n    return null;\r\n}\r\nfunction titleComparer(a, b) {\r\n    const aNumber = extractnumber(a.title);\r\n    const bNumber = extractnumber(b.title);\r\n    const aTitle = a.title.toLowerCase();\r\n    const bTitle = b.title.toLowerCase();\r\n    return aNumber > bNumber ? 1 : aNumber === bNumber ? ((aTitle > bTitle) ? 1 : -1) : -1;\r\n}\r\n\n\n//# sourceURL=webpack:///./Client/comparers.ts?");

/***/ }),

/***/ "./Client/filter.ts":
/*!**************************!*\
  !*** ./Client/filter.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return filterQuery; });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ \"./Client/state.ts\");\n/* harmony import */ var _comparers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comparers */ \"./Client/comparers.ts\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postData */ \"./Client/postData.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\n\r\nfunction filterQuery() {\r\n    return _state__WEBPACK_IMPORTED_MODULE_0__[\"localState\"].getValue(\"isJs\") ? filterQueryJS() : filterQueryDB((_state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].getValue(\"isLunch\") ? \"LunchItems\" : \"FoodItems\"));\r\n}\r\n;\r\nString.prototype.incNoCase = function (substr) {\r\n    return this.toLowerCase().includes(substr.toLowerCase());\r\n};\r\nArray.prototype.reverseCondition = function () {\r\n    if (!_state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].getValue(\"sortIsDown\")) {\r\n        return this.slice(0).reverse();\r\n    }\r\n    return this;\r\n};\r\nArray.prototype.filterBy = function (prop, func) {\r\n    // if value has default(empty) then skip filtering\r\n    return _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].isDefault(prop) ? this : this.filter(func);\r\n};\r\nfunction filterQueryJS() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        var listname = _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].getValue(\"isLunch\") ? \"lunchlist\" : \"foodlist\";\r\n        return _state__WEBPACK_IMPORTED_MODULE_0__[\"localState\"].getValue(listname)\r\n            .filterBy(\"priceMax\", p => p.price <= _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].getValue(\"priceMax\"))\r\n            .filterBy(\"description\", d => d.description.incNoCase(_state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].getValue(\"description\")))\r\n            .filterBy(\"category\", d => d.category.incNoCase(_state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].getValue(\"category\")))\r\n            .filterBy(\"title\", d => d.title.incNoCase(_state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].getValue(\"title\")))\r\n            .slice(0)\r\n            .sort((a, b) => {\r\n            const sortProp = _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].getValue(\"sorting\");\r\n            const aSort = (typeof a[sortProp] === \"string\") ? a[sortProp].toLowerCase() : a[sortProp];\r\n            const bSort = (typeof b[sortProp] === \"string\") ? b[sortProp].toLowerCase() : b[sortProp];\r\n            if (sortProp === \"title\") {\r\n                return Object(_comparers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(a, b);\r\n            }\r\n            if (sortProp === \"category\" || sortProp === \"price\") {\r\n                return aSort > bSort ? 1 : aSort == bSort ? Object(_comparers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(a, b) : -1;\r\n            }\r\n        })\r\n            .reverseCondition();\r\n    });\r\n}\r\nfunction filterQueryDB(route) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        var result = yield Object(_postData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"query/\" + route, _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].getObject());\r\n        return result;\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./Client/filter.ts?");

/***/ }),

/***/ "./Client/getLists.ts":
/*!****************************!*\
  !*** ./Client/getLists.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getLists; });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ \"./Client/state.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\nfunction getLists() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        var foodlist = yield fetch(\"FoodItems/all\").then(res => res.json());\r\n        var lunchlist = yield fetch(\"LunchItems/all\").then(res => res.json());\r\n        _state__WEBPACK_IMPORTED_MODULE_0__[\"localState\"].setValue(\"foodlist\", foodlist);\r\n        _state__WEBPACK_IMPORTED_MODULE_0__[\"localState\"].setValue(\"lunchlist\", lunchlist);\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./Client/getLists.ts?");

/***/ }),

/***/ "./Client/postData.ts":
/*!****************************!*\
  !*** ./Client/postData.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return postData; });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nfunction postData(url = '', data = {}) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        // Default options are marked with *\r\n        const response = yield fetch(url, {\r\n            method: 'POST',\r\n            mode: 'cors',\r\n            cache: 'no-cache',\r\n            credentials: 'same-origin',\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n                // 'Content-Type': 'application/x-www-form-urlencoded',\r\n            },\r\n            redirect: 'follow',\r\n            referrer: 'no-referrer',\r\n            body: JSON.stringify(data) // body data type must match \"Content-Type\" header\r\n        });\r\n        return yield response.json(); // parses JSON response into native JavaScript objects\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./Client/postData.ts?");

/***/ }),

/***/ "./Client/renderList.ts":
/*!******************************!*\
  !*** ./Client/renderList.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderlist; });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nfunction formatToList() {\r\n}\r\nfunction arrayToList(arr) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        var resultarr = yield arr;\r\n        return resultarr.map((item) => \"<tr><td class='li-category'>\" + item.category + \"</td>\" +\r\n            \"<td class='li-title'>\" + item.title + \"</td>\" +\r\n            \"<td class='li-description'>\" + item.description + \"</td>\" +\r\n            \"<td class='li-price'>\" + item.price + \"Dk</td></tr>\");\r\n    });\r\n}\r\nfunction renderlist(list) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        var top = `\r\n    <table class='table'>\r\n    <thead>\r\n        <tr>\r\n            <th scope=\"col\">Kategori</th>\r\n            <th scope=\"col\">Titel</th>\r\n            <th scope=\"col\">Indhold</th>\r\n            <th scope=\"col\">Pris</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>`;\r\n        const bottom = \"</tbody></table>\";\r\n        const middle = (yield arrayToList(list)).join(\"\");\r\n        document.querySelector(\"#listUl\").innerHTML = top + middle + bottom;\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./Client/renderList.ts?");

/***/ }),

/***/ "./Client/site.ts":
/*!************************!*\
  !*** ./Client/site.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addListeners */ \"./Client/addListeners.ts\");\n/* harmony import */ var _renderList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderList */ \"./Client/renderList.ts\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ \"./Client/state.ts\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter */ \"./Client/filter.ts\");\n/* harmony import */ var _getLists__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getLists */ \"./Client/getLists.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\n\r\n\r\n\r\n(function init() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        Object(_addListeners__WEBPACK_IMPORTED_MODULE_0__[\"toggleIcon\"])(\"fa-sort-amount-down-alt\", \"fa-sort-amount-up-alt\", \".icon-toggle.sort\", function (val) {\r\n            _state__WEBPACK_IMPORTED_MODULE_2__[\"state\"].setValue(\"sortIsDown\", val);\r\n        });\r\n        yield Object(_renderList__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_filter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\r\n        document.querySelector(\"#process-information\").innerHTML = \"Loaded\";\r\n        yield Object(_getLists__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n        Object(_addListeners__WEBPACK_IMPORTED_MODULE_0__[\"toggleIcon\"])(\"fab fa-node-js\", \"fas fa-database\", \".icon-toggle.jsdb\", function (val) {\r\n            _state__WEBPACK_IMPORTED_MODULE_2__[\"localState\"].setValue(\"isJs\", val);\r\n        });\r\n        Object(_addListeners__WEBPACK_IMPORTED_MODULE_0__[\"textInputSearch\"])(\"#priceSearch\", function (e) {\r\n            _state__WEBPACK_IMPORTED_MODULE_2__[\"state\"].setValue(\"priceMax\", e.target.value || 100000);\r\n        });\r\n        Object(_addListeners__WEBPACK_IMPORTED_MODULE_0__[\"textInputSearch\"])(\"#descriptionSearch\", function (e) {\r\n            _state__WEBPACK_IMPORTED_MODULE_2__[\"state\"].setValue(\"description\", e.target.value.toLowerCase());\r\n        });\r\n        Object(_addListeners__WEBPACK_IMPORTED_MODULE_0__[\"textInputSearch\"])(\"#categorySearch\", function (e) {\r\n            _state__WEBPACK_IMPORTED_MODULE_2__[\"state\"].setValue(\"category\", e.target.value.toLowerCase());\r\n        });\r\n        Object(_addListeners__WEBPACK_IMPORTED_MODULE_0__[\"textInputSearch\"])(\"#titleSearch\", function (e) {\r\n            _state__WEBPACK_IMPORTED_MODULE_2__[\"state\"].setValue(\"title\", e.target.value.toLowerCase());\r\n        });\r\n        Object(_addListeners__WEBPACK_IMPORTED_MODULE_0__[\"isLunch\"])(\"#lunchSelect\", function (e) {\r\n            var index = e.target.options[e.target.selectedIndex].value;\r\n            _state__WEBPACK_IMPORTED_MODULE_2__[\"state\"].setValue(\"isLunch\", Number(index) === 1 ? false : true);\r\n        });\r\n        Object(_addListeners__WEBPACK_IMPORTED_MODULE_0__[\"sortSelect\"])(\".label-align-class.sort\", function (e) {\r\n            var elem = e.target;\r\n            var findName = elem.querySelector(\"input\").name;\r\n            _state__WEBPACK_IMPORTED_MODULE_2__[\"state\"].setValue(\"sorting\", findName);\r\n        });\r\n    });\r\n}());\r\n\n\n//# sourceURL=webpack:///./Client/site.ts?");

/***/ }),

/***/ "./Client/state.ts":
/*!*************************!*\
  !*** ./Client/state.ts ***!
  \*************************/
/*! exports provided: state, localState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"state\", function() { return state; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"localState\", function() { return localState; });\n/* harmony import */ var _stateInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stateInit */ \"./Client/stateInit.ts\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ \"./Client/filter.ts\");\n/* harmony import */ var _renderList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderList */ \"./Client/renderList.ts\");\n\r\n\r\n\r\nvar state = Object(_stateInit__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n    isLunch: false,\r\n    priceMax: 100000,\r\n    description: \"\",\r\n    category: \"\",\r\n    title: \"\",\r\n    sorting: \"category\",\r\n    sortIsDown: true,\r\n}, _renderList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _filter__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\nvar localState = Object(_stateInit__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n    isJs: false,\r\n    foodlist: [],\r\n    lunchlist: []\r\n}, _renderList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _filter__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n\r\n\n\n//# sourceURL=webpack:///./Client/state.ts?");

/***/ }),

/***/ "./Client/stateInit.ts":
/*!*****************************!*\
  !*** ./Client/stateInit.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return stateInit; });\nfunction stateInit(obj, renderer, filterFunc) {\r\n    const objDefault = JSON.parse(JSON.stringify(obj));\r\n    return {\r\n        isDefault(prop) {\r\n            if (!obj.hasOwnProperty(prop)) {\r\n                throw \"property not in object\";\r\n            }\r\n            return obj[prop] === objDefault[prop];\r\n        },\r\n        setValue(prop, val) {\r\n            if (!obj.hasOwnProperty(prop)) {\r\n                throw \"property not in object\";\r\n            }\r\n            obj[prop] = val;\r\n            renderer(filterFunc());\r\n        },\r\n        getValue(prop) {\r\n            if (!obj.hasOwnProperty(prop)) {\r\n                throw \"property not in object\";\r\n            }\r\n            return obj[prop];\r\n        },\r\n        getObject() {\r\n            return obj;\r\n        }\r\n    };\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./Client/stateInit.ts?");

/***/ })

/******/ });