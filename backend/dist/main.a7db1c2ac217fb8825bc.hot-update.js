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

/***/ "./domains/company/service/index.ts":
/*!******************************************!*\
  !*** ./domains/company/service/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CompanyService = void 0;\nvar company_repo_1 = __webpack_require__(/*! ../../../repo/company.repo */ \"./repo/company.repo.ts\");\nvar room_repo_1 = __webpack_require__(/*! ../../../repo/room.repo */ \"./repo/room.repo.ts\");\nvar CompanyService = /** @class */ (function () {\n    function CompanyService() {\n        this._companyRepo = new company_repo_1.CompanyRepo();\n        this._roomRepo = new room_repo_1.RoomRepo();\n    }\n    CompanyService.prototype.getCompanies = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, this._companyRepo.select()];\n                    case 1: return [2 /*return*/, _a.sent()];\n                }\n            });\n        });\n    };\n    CompanyService.prototype.getCompanyRooms = function (id) {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                return [2 /*return*/];\n            });\n        });\n    };\n    return CompanyService;\n}());\nexports.CompanyService = CompanyService;\n\n\n//# sourceURL=webpack://tech-challenge/./domains/company/service/index.ts?");

/***/ }),

/***/ "./repo/room.repo.ts":
/*!***************************!*\
  !*** ./repo/room.repo.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.RoomRepo = void 0;\nvar base_repo_1 = __webpack_require__(/*! ./base.repo */ \"./repo/base.repo.ts\");\nvar companies = [\n    { id: 1, companyId: 1, name: 'Room 1' },\n    { id: 2, companyId: 1, name: 'Room 2' },\n    { id: 3, companyId: 1, name: 'Room 3' },\n    { id: 4, companyId: 1, name: 'Room 4' },\n    { id: 5, companyId: 1, name: 'Room 5' },\n    { id: 6, companyId: 1, name: 'Room 6' },\n    { id: 7, companyId: 1, name: 'Room 7' },\n    { id: 8, companyId: 2, name: 'Room 1' },\n    { id: 9, companyId: 2, name: 'Room 2' },\n    { id: 10, companyId: 2, name: 'Room 3' },\n    { id: 11, companyId: 2, name: 'Room 4' },\n    { id: 12, companyId: 2, name: 'Room 5' },\n    { id: 13, companyId: 2, name: 'Room 6' },\n    { id: 14, companyId: 2, name: 'Room 7' },\n];\nvar RoomRepo = /** @class */ (function (_super) {\n    __extends(RoomRepo, _super);\n    function RoomRepo() {\n        return _super.call(this, companies) || this;\n    }\n    return RoomRepo;\n}(base_repo_1.BaseRepo));\nexports.RoomRepo = RoomRepo;\n\n\n//# sourceURL=webpack://tech-challenge/./repo/room.repo.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("20ab39e20732ca1f981b")
/******/ })();
/******/ 
/******/ }
;