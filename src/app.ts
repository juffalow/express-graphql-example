import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import responseTime from './middlewares/reponseTime';
import cors from './middlewares/cors';
import trace from './middlewares/trace';
import context from './context';
import schema from './schema';

const app = express();

app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(trace);
app.use(responseTime);
app.use(cors);

app.all('/graphql', createHandler({
  schema,
  context: context as any,
}));

export default app;
