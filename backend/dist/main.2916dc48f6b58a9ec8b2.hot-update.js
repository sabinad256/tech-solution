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

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar graphql_yoga_1 = __webpack_require__(/*! graphql-yoga */ \"graphql-yoga\");\nvar schema_1 = __webpack_require__(/*! @graphql-tools/schema */ \"@graphql-tools/schema\");\nvar merge_1 = __webpack_require__(/*! @graphql-tools/merge */ \"@graphql-tools/merge\");\nvar index_1 = __importDefault(__webpack_require__(/*! domains/company/graphql/index */ \"./domains/company/graphql/index.ts\"));\nvar index_2 = __importDefault(__webpack_require__(/*! domains/company/resolvers/index */ \"./domains/company/resolvers/index.ts\"));\nvar executableSchema = (0, schema_1.makeExecutableSchema)({\n    typeDefs: [index_1.default],\n    resolvers: (0, merge_1.mergeResolvers)([index_2.default]),\n});\n// const server = createServer({\n//   schema: executableSchema,\n//   endpoint: \"/api/graphql\",\n//   graphiql: true,\n// });\n// export default server;\nvar app = (0, express_1.default)();\nvar yoga = (0, graphql_yoga_1.createYoga)({ schema: executableSchema });\n// Bind GraphQL Yoga to the graphql endpoint to avoid rendering the playground on any path\napp.use(yoga.graphqlEndpoint, yoga);\napp.listen(4000, function () {\n    console.log('Running a GraphQL API server at http://localhost:4000/graphql');\n});\n// const express = require('express')\n// const { graphqlHTTP } = require('express-graphql')\n// const graphql = require('graphql')\n// const joinMonster = require('join-monster').default;\n// // Connect to database\n// const config = {\n//   client: 'postgres',\n//   connection: {\n//     host: 'localhost',\n//     user: 'test',\n//     password: 'test',\n//     database: 'harvest'\n//   }\n// }\n// const knex = require('knex')(config);\n// // Define the schema\n// const Device = new graphql.GraphQLObjectType({\n//   name: 'Device',\n//   extensions: {\n//     joinMonster: {\n//       sqlTable: 'device',\n//       uniqueKey: 'id'\n//     }\n//   },\n//   fields: () => ({\n//     id: { type: graphql.GraphQLString },\n//     name: { type: graphql.GraphQLString },\n//   })\n// });\n// const MutationRoot = new graphql.GraphQLObjectType({\n//   name: 'Mutation',\n//   fields: () => ({\n//     device: {\n//       type: Device,\n//       args: {\n//         name: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },\n//       },\n//     }\n//   })\n// })\n// const QueryRoot = new graphql.GraphQLObjectType({\n//   name: 'Query',\n//   fields: () => ({\n//     devices: {\n//       type: new graphql.GraphQLList(Device),\n//       resolve: (parent, args, context, resolveInfo) => {\n//         return joinMonster(resolveInfo, {}, sql => {\n//           console.log(sql);\n//           return knex.raw(sql)\n//         })\n//       }\n//     },\n//     device: {\n//       type: Device,\n//       args: { id: { type: graphql.GraphQLNonNull(graphql.GraphQLInt) } },\n//       where: (deviceTable, args, context) => `${deviceTable}.id = ${args.id}`,\n//       resolve: (parent, args, context, resolveInfo) => {\n//         return joinMonster(resolveInfo, {}, sql => {\n//           console.log(sql);\n//           return knex.raw(sql)\n//         })\n//       }\n//     },\n//   })\n// })\n// const schema = new graphql.GraphQLSchema({\n//   query: QueryRoot,\n//   mutation: MutationRoot\n// });\n// // Create the Express app\n// const app = express();\n// app.use('/api', graphqlHTTP({\n//   schema: schema,\n//   graphiql: true\n// }));\n// console.log(\"running on http://localhost:4000/api\")\n// app.listen(4000);\n\n\n//# sourceURL=webpack://tech-challenge/./index.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7353694695b863f1dd40")
/******/ })();
/******/ 
/******/ }
;