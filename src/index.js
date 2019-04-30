import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
import root from './root';
import schema from './schema';
import context from './context';

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
  context: context,
}));
app.listen(8088);
console.log('Running a GraphQL API server at localhost:8088/graphql');