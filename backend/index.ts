import express from 'express';
import { createYoga } from 'graphql-yoga';
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeResolvers } from "@graphql-tools/merge";
import { createServer } from "@graphql-yoga/node";

import companyTypes from "domains/company/graphql/index";
import companyResolver from "domains/company/resolvers/index";

const executableSchema = makeExecutableSchema({
  typeDefs: [ companyTypes ],
  resolvers: mergeResolvers([ companyResolver ]),
});

// const server = createServer({
//   schema: executableSchema,
//   endpoint: "/api/graphql",
//   graphiql: true,
// });

// export default server;


const app = express()
 
const yoga = createYoga({ schema: executableSchema })
 
// Bind GraphQL Yoga to the graphql endpoint to avoid rendering the playground on any path
app.use(yoga.graphqlEndpoint, yoga)
 
app.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql');
})


// const express = require('express')
// const { graphqlHTTP } = require('express-graphql')
// const graphql = require('graphql')
// const joinMonster = require('join-monster').default;

// // Connect to database
// const config = {
//   client: 'postgres',
//   connection: {
//     host: 'localhost',
//     user: 'test',
//     password: 'test',
//     database: 'harvest'
//   }
// }
// const knex = require('knex')(config);

// // Define the schema
// const Device = new graphql.GraphQLObjectType({
//   name: 'Device',
//   extensions: {
//     joinMonster: {
//       sqlTable: 'device',
//       uniqueKey: 'id'
//     }
//   },
//   fields: () => ({
//     id: { type: graphql.GraphQLString },
//     name: { type: graphql.GraphQLString },
//   })
// });

// const MutationRoot = new graphql.GraphQLObjectType({
//   name: 'Mutation',
//   fields: () => ({
//     device: {
//       type: Device,
//       args: {
//         name: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
//       },
//     }
//   })
// })

// const QueryRoot = new graphql.GraphQLObjectType({
//   name: 'Query',
//   fields: () => ({
//     devices: {
//       type: new graphql.GraphQLList(Device),
//       resolve: (parent, args, context, resolveInfo) => {
//         return joinMonster(resolveInfo, {}, sql => {
//           console.log(sql);
//           return knex.raw(sql)
//         })
//       }
//     },
//     device: {
//       type: Device,
//       args: { id: { type: graphql.GraphQLNonNull(graphql.GraphQLInt) } },
//       where: (deviceTable, args, context) => `${deviceTable}.id = ${args.id}`,
//       resolve: (parent, args, context, resolveInfo) => {
//         return joinMonster(resolveInfo, {}, sql => {
//           console.log(sql);
//           return knex.raw(sql)
//         })
//       }
//     },
//   })
// })

// const schema = new graphql.GraphQLSchema({
//   query: QueryRoot,
//   mutation: MutationRoot
// });

// // Create the Express app
// const app = express();
// app.use('/api', graphqlHTTP({
//   schema: schema,
//   graphiql: true
// }));
// console.log("running on http://localhost:4000/api")
// app.listen(4000);