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

/***/ "./repo/data.ts":
/*!**********************!*\
  !*** ./repo/data.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.users = exports.rooms = exports.companies = void 0;\nvar generateCompanies = function (noOfCompanies) {\n    var companies = [];\n    for (var i = 1; i <= noOfCompanies; i++) {\n        var company = {\n            id: i,\n            name: \"Company \".concat(i)\n        };\n        companies.push(company);\n    }\n    return companies;\n};\nvar generateRooms = function (companies) {\n    var rooms = [];\n    companies.forEach(function (company) {\n        var numRooms = Math.floor(Math.random() * 5) + 1; // Generate random number of rooms for each company\n        for (var i = 1; i <= numRooms; i++) {\n            var room = {\n                id: rooms.length + 1,\n                companyId: company.id,\n                name: \"Room \".concat(i, \" of \").concat(company.name)\n            };\n            rooms.push(room);\n        }\n    });\n    return rooms;\n};\nvar generateUsers = function (numUsers, companies) {\n    var users = [];\n    for (var i = 1; i <= numUsers; i++) {\n        var user = {\n            id: i,\n            username: \"User\".concat(i),\n            companyIds: generateRandomCompanyIds(companies)\n        };\n        users.push(user);\n    }\n    return users;\n};\nvar generateRandomCompanyIds = function (companies) {\n    var companyIds = [];\n    var maxCompanyIds = Math.min(companies.length, 5); // Maximum 5 company IDs per user\n    for (var i = 1; i <= maxCompanyIds; i++) {\n        var randomIndex = Math.floor(Math.random() * companies.length);\n        var companyId = companies[randomIndex].id;\n        if (!companyIds.includes(companyId)) {\n            companyIds.push(companyId);\n        }\n    }\n    return companyIds;\n};\n// Usage example\nexports.companies = generateCompanies(100);\nexports.rooms = generateRooms(exports.companies);\nexports.users = generateUsers(1000, exports.companies);\nconsole.log(exports.companies);\nconsole.log(exports.rooms);\nconsole.log(exports.users);\n\n\n//# sourceURL=webpack://tech-challenge/./repo/data.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4b5bf55ed9d32ab8a106")
/******/ })();
/******/ 
/******/ }
;