import express from 'express';
import graphqlHTTP from 'express-graphql';
import responseTime from './middlewares/reponseTime';
import cors from './middlewares/cors';
import config from './config';
import context from './context';
import schema from './schema';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(responseTime);
app.use(cors);

app.use('/graphql', graphqlHTTP({
  context,
  graphiql: {
    defaultQuery: config.defaultQuery,
  } as undefined,
  schema,
}));

app.listen(config.port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${ config.port }`);
});
