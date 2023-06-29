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

/***/ "./repo/company.repo.ts":
/*!******************************!*\
  !*** ./repo/company.repo.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CompanyRepo = void 0;\nvar companies = [\n    { id: 1, name: 'Harvest Technology' },\n    { id: 1, name: 'Harvest Infinity' },\n];\nvar CompanyRepo = /** @class */ (function () {\n    function CompanyRepo() {\n    }\n    CompanyRepo.prototype.select = function () {\n        return Promise.resolve(companies);\n    };\n    return CompanyRepo;\n}());\nexports.CompanyRepo = CompanyRepo;\n\n\n//# sourceURL=webpack://tech-challenge/./repo/company.repo.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c8c46770f1ea08d49d55")
/******/ })();
/******/ 
/******/ }
;