"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./repo/base.repo.ts":
/*!***************************!*\
  !*** ./repo/base.repo.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __read = (this && this.__read) || function (o, n) {\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\n    if (!m) return o;\n    var i = m.call(o), r, ar = [], e;\n    try {\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\n    }\n    catch (error) { e = { error: error }; }\n    finally {\n        try {\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\n        }\n        finally { if (e) throw e.error; }\n    }\n    return ar;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.BaseRepo = void 0;\nvar BaseRepo = /** @class */ (function () {\n    function BaseRepo(data) {\n        this._data = data;\n    }\n    // select(where?: any): Promise<T[]>{\n    //      let rs = this._data;\n    //      if( where ){\n    //           rs = Object.entries(where).reduce( (acc, [key, value]) => {\n    //                return acc.filter( r => r[key] = value );\n    //           }, rs)\n    //      }\n    //      return Promise.resolve(rs);\n    // }\n    BaseRepo.prototype.select = function (where) {\n        var rs = this._data;\n        if (where) {\n            rs = Object.entries(where).reduce(function (acc, _a) {\n                var _b = __read(_a, 2), key = _b[0], value = _b[1];\n                console.log(' getCompanyRooms > key = ', key, 'value', value);\n                return acc.filter(function (r) { return r[key] === value; }); // Use strict equality (===) instead of assignment (=)\n            }, rs);\n        }\n        return Promise.resolve(rs);\n    };\n    return BaseRepo;\n}());\nexports.BaseRepo = BaseRepo;\n\n\n//# sourceURL=webpack://tech-challenge/./repo/base.repo.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("002e8ba8d8c79ceb0fcd")
/******/ })();
/******/ 
/******/ }
;