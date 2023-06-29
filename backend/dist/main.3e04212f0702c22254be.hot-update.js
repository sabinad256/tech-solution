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

eval("\nvar __read = (this && this.__read) || function (o, n) {\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\n    if (!m) return o;\n    var i = m.call(o), r, ar = [], e;\n    try {\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\n    }\n    catch (error) { e = { error: error }; }\n    finally {\n        try {\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\n        }\n        finally { if (e) throw e.error; }\n    }\n    return ar;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.BaseRepo = void 0;\nvar BaseRepo = /** @class */ (function () {\n    function BaseRepo(data) {\n        this._data = data;\n    }\n    BaseRepo.prototype.select = function (where) {\n        var rs = this._data;\n        if (where) {\n            rs = Object.entries(where).reduce(function (acc, _a) {\n                var _b = __read(_a, 2), key = _b[0], value = _b[1];\n                return acc.filter(function (r) { return r[key] = value; });\n            }, rs);\n        }\n        return Promise.resolve(rs);\n    };\n    return BaseRepo;\n}());\nexports.BaseRepo = BaseRepo;\n\n\n//# sourceURL=webpack://tech-challenge/./repo/base.repo.ts?");

/***/ }),

/***/ "./repo/company.repo.ts":
/*!******************************!*\
  !*** ./repo/company.repo.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CompanyRepo = void 0;\nvar base_repo_1 = __webpack_require__(/*! ./base.repo */ \"./repo/base.repo.ts\");\nvar companies = [\n    { id: 1, name: 'Harvest Technology' },\n    { id: 1, name: 'Harvest Infinity' },\n];\nvar CompanyRepo = /** @class */ (function (_super) {\n    __extends(CompanyRepo, _super);\n    function CompanyRepo() {\n        return _super.call(this, companies) || this;\n    }\n    return CompanyRepo;\n}(base_repo_1.BaseRepo));\nexports.CompanyRepo = CompanyRepo;\n\n\n//# sourceURL=webpack://tech-challenge/./repo/company.repo.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9f8417d3d7537d66d7fc")
/******/ })();
/******/ 
/******/ }
;