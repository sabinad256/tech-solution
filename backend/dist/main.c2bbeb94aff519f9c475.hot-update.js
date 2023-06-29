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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CompanyRepo = void 0;\nvar base_repo_1 = __webpack_require__(/*! ./base.repo */ \"./repo/base.repo.ts\");\nvar data_1 = __webpack_require__(/*! ./data */ \"./repo/data.ts\");\nvar CompanyRepo = /** @class */ (function (_super) {\n    __extends(CompanyRepo, _super);\n    function CompanyRepo() {\n        return _super.call(this, data_1.companies) || this;\n    }\n    return CompanyRepo;\n}(base_repo_1.BaseRepo));\nexports.CompanyRepo = CompanyRepo;\n\n\n//# sourceURL=webpack://tech-challenge/./repo/company.repo.ts?");

/***/ }),

/***/ "./repo/data.ts":
/*!**********************!*\
  !*** ./repo/data.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.rooms = exports.companies = void 0;\nvar generateCompanies = function (noOfCompanies) {\n    var companies = [];\n    for (var i = 1; i <= noOfCompanies; i++) {\n        var company = {\n            id: i,\n            name: \"Company \".concat(i)\n        };\n        companies.push(company);\n    }\n    return companies;\n};\nvar generateRooms = function (companies) {\n    var rooms = [];\n    companies.forEach(function (company) {\n        var numRooms = Math.floor(Math.random() * 5) + 1; // Generate random number of rooms for each company\n        for (var i = 1; i <= numRooms; i++) {\n            var room = {\n                id: rooms.length + 1,\n                companyId: company.id,\n                name: \"Room \".concat(i, \" of \").concat(company.name)\n            };\n            rooms.push(room);\n        }\n    });\n    return rooms;\n};\n// Usage example\nexports.companies = generateCompanies(1000);\nexports.rooms = generateRooms(exports.companies);\nconsole.log(exports.companies);\nconsole.log(exports.rooms);\n\n\n//# sourceURL=webpack://tech-challenge/./repo/data.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e1db8b164b03b1fa0f32")
/******/ })();
/******/ 
/******/ }
;