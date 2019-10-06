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

/***/ "./Client/site.ts":
/*!************************!*\
  !*** ./Client/site.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification\r\n// for details on configuring this project to bundle and minify static web assets.\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n// Write your JavaScript code.\r\nfunction extractnumber(val) {\r\n    if (!val)\r\n        return Number.MAX_VALUE;\r\n    var match = val.toString().match(/\\d+/);\r\n    if (match)\r\n        return Number(match[0]);\r\n    return null;\r\n}\r\nfunction sortSelect() {\r\n    var selectAll = document.querySelectorAll(\".label-align-class.sort\");\r\n    Array.from(selectAll).forEach(select => select.addEventListener(\"click\", function (e) {\r\n        var elem = e.target;\r\n        var findName = elem.querySelector(\"input\").name;\r\n        queryObject.sorting = findName;\r\n        renderlist(filterQuery());\r\n    }));\r\n}\r\nfunction textInputSearch(selector, callback) {\r\n    var input = document.querySelector(selector);\r\n    input.addEventListener(\"input\", function (e) {\r\n        callback(e);\r\n    });\r\n}\r\nfunction isLunch() {\r\n    var input = document.querySelector(\"#lunchSelect\");\r\n    input.addEventListener(\"change\", function (e) {\r\n        var index = e.target.options[e.target.selectedIndex].value;\r\n        queryObject.isLunch = Number(index) === 1 ? false : true;\r\n        renderlist(filterQuery());\r\n    });\r\n}\r\nvar queryObject = {\r\n    isLunch: false,\r\n    priceMax: 10000,\r\n    description: \"\",\r\n    category: \"\",\r\n    title: \"\",\r\n    sorting: \"category\",\r\n    sortIsDown: true,\r\n};\r\nvar localParams = {\r\n    isJs: false,\r\n    foodlist: [],\r\n    lunchlist: []\r\n};\r\nArray.prototype.reverseCondition = function () {\r\n    if (!queryObject.sortIsDown) {\r\n        return this.slice(0).reverse();\r\n    }\r\n    return this;\r\n};\r\nString.prototype.incNoCase = function (substr) {\r\n    return this.toLowerCase().includes(substr.toLowerCase());\r\n};\r\nfunction reverseCondition() {\r\n    var down = \"fa-sort-amount-down-alt\";\r\n    var up = \"fa-sort-amount-up-alt\";\r\n    function isDown(elem) {\r\n        return elem.classList[2].includes(\"down\");\r\n    }\r\n    document.querySelector(\".icon-toggle.sort\").addEventListener(\"click\", function (e) {\r\n        var elem;\r\n        if (e.target.childNodes.length > 0) {\r\n            elem = e.target.querySelector(\"i\");\r\n        }\r\n        else {\r\n            elem = e.target;\r\n        }\r\n        elem.classList.replace((isDown(elem) ? down : up), (isDown(elem) ? up : down));\r\n        queryObject.sortIsDown = isDown(elem);\r\n        renderlist(filterQuery());\r\n    });\r\n}\r\nfunction setDataSource() {\r\n    var db = \"fas fa-database\";\r\n    var js = \"fab fa-node-js\";\r\n    function isJs(elem) {\r\n        return elem.classList[1].includes(\"js\");\r\n    }\r\n    document.querySelector(\".icon-toggle.jsdb\").addEventListener(\"click\", function (e) {\r\n        var elem;\r\n        if (e.target.childNodes.length > 0) {\r\n            elem = e.target.querySelector(\"i\");\r\n        }\r\n        else {\r\n            elem = e.target;\r\n        }\r\n        elem.className = isJs(elem) ? db : js;\r\n        localParams.isJs = isJs(elem);\r\n        renderlist(filterQuery());\r\n    });\r\n}\r\nfunction filterQuery() {\r\n    return localParams.isJs ? filterQueryJS() : filterQueryDB((queryObject.isLunch ? \"LunchItems\" : \"FoodItems\"), queryObject);\r\n}\r\nfunction titleComparer(a, b) {\r\n    const aNumber = extractnumber(a.title);\r\n    const bNumber = extractnumber(b.title);\r\n    const aTitle = a.title.toLowerCase();\r\n    const bTitle = b.title.toLowerCase();\r\n    return aNumber > bNumber ? 1 : aNumber === bNumber ? ((aTitle > bTitle) ? 1 : -1) : -1;\r\n}\r\nfunction filterQueryJS() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        var listname = queryObject.isLunch ? \"lunchlist\" : \"foodlist\";\r\n        return localParams[listname]\r\n            .filter(p => p.price <= queryObject.priceMax)\r\n            .filter(d => d.description.incNoCase(queryObject.description))\r\n            .filter(d => d.category.incNoCase(queryObject.category))\r\n            .filter(d => d.title.incNoCase(queryObject.title))\r\n            .slice(0)\r\n            .sort((a, b) => {\r\n            const sortProp = queryObject.sorting;\r\n            const aSort = (typeof a[sortProp] === \"string\") ? a[sortProp].toLowerCase() : a[sortProp];\r\n            const bSort = (typeof b[sortProp] === \"string\") ? b[sortProp].toLowerCase() : b[sortProp];\r\n            if (sortProp === \"title\") {\r\n                return titleComparer(a, b);\r\n            }\r\n            if (sortProp === \"category\" || sortProp === \"price\") {\r\n                return aSort > bSort ? 1 : aSort == bSort ? titleComparer(a, b) : -1;\r\n            }\r\n        })\r\n            .reverseCondition();\r\n    });\r\n}\r\nfunction filterQueryDB(route, data = null) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        var result = yield postData(\"query/\" + route, data);\r\n        return result;\r\n    });\r\n}\r\nfunction formatToList() {\r\n}\r\nfunction arrayToList(arr) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        var resultarr = yield arr;\r\n        return resultarr.map((item) => \"<tr><td class='li-category'>\" + item.category + \"</td>\" +\r\n            \"<td class='li-title'>\" + item.title + \"</td>\" +\r\n            \"<td class='li-description'>\" + item.description + \"</td>\" +\r\n            \"<td class='li-price'>\" + item.price + \"</td></tr>\");\r\n    });\r\n}\r\nfunction renderlist(list) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        var top = `<table class='table'>\r\n    <thead>\r\n        <tr>\r\n            <th scope=\"col\">Category</th>\r\n            <th scope=\"col\">Title</th>\r\n            <th scope=\"col\">Dexcription</th>\r\n            <th scope=\"col\">Price</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>`;\r\n        const middle = (yield arrayToList(list)).join(\"\");\r\n        console.log(middle);\r\n        const bottom = \"</tbody></table>\";\r\n        document.querySelector(\"#listUl\").innerHTML = top + middle + bottom;\r\n    });\r\n}\r\n(function init() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        reverseCondition();\r\n        setDataSource();\r\n        localParams.foodlist = yield fetch(\"FoodItems/all\").then(res => res.json());\r\n        localParams.lunchlist = yield fetch(\"LunchItems/all\").then(res => res.json());\r\n        document.querySelector(\"#process-information\").innerHTML = \"Loaded\";\r\n        renderlist(filterQuery());\r\n        textInputSearch(\"#priceSearch\", function (e) {\r\n            queryObject.priceMax = e.target.value || 100000;\r\n            renderlist(filterQuery());\r\n        });\r\n        textInputSearch(\"#descriptionSearch\", function (e) {\r\n            queryObject.description = e.target.value.toLowerCase();\r\n            renderlist(filterQuery());\r\n        });\r\n        textInputSearch(\"#categorySearch\", function (e) {\r\n            queryObject.category = e.target.value.toLowerCase();\r\n            renderlist(filterQuery());\r\n        });\r\n        textInputSearch(\"#titleSearch\", function (e) {\r\n            queryObject.title = e.target.value.toLowerCase();\r\n            renderlist(filterQuery());\r\n        });\r\n        isLunch();\r\n        sortSelect();\r\n    });\r\n}());\r\nfunction postData(url = '', data = {}) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        console.log(data);\r\n        // Default options are marked with *\r\n        const response = yield fetch(url, {\r\n            method: 'POST',\r\n            mode: 'cors',\r\n            cache: 'no-cache',\r\n            credentials: 'same-origin',\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n                // 'Content-Type': 'application/x-www-form-urlencoded',\r\n            },\r\n            redirect: 'follow',\r\n            referrer: 'no-referrer',\r\n            body: JSON.stringify(data) // body data type must match \"Content-Type\" header\r\n        });\r\n        return yield response.json(); // parses JSON response into native JavaScript objects\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./Client/site.ts?");

/***/ })

/******/ });