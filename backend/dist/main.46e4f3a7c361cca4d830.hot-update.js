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

/***/ "./domains/company/graphql/index.ts":
/*!******************************************!*\
  !*** ./domains/company/graphql/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports[\"default\"] = \"\\n  type CompaniesResponseType {\\n    data: [CompanyType]\\n  }\\n\\n  type RoomType {\\n    id: Int\\n    name: String\\n  }\\n\\n  type CompanyType {\\n    id: Int\\n    name: String\\n    rooms: [RoomType]\\n  }\\n  \\n  type RoomsResponseType {\\n    data: [RoomType]\\n  }\\n\\n  input RoomFilterInput {    \\n    name: String\\n  }\\n\\n  input CompanyFilterInput {    \\n    name: String\\n  }\\n\\n  type Query {\\n    Companies(filter: CompanyFilterInput): CompaniesResponseType\\n    Rooms(filter: RoomFilterInput): RoomsResponseType\\n  }\\n\";\n\n\n//# sourceURL=webpack://tech-challenge/./domains/company/graphql/index.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("eb092b56571322c1f310")
/******/ })();
/******/ 
/******/ }
;