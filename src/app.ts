import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { OperationContext } from 'graphql-http';
import responseTime from './middlewares/reponseTime';
import cors from './middlewares/cors';
import trace from './middlewares/trace';
import context from './context';
import schema from './schema';
import AWSXRay from './logger/AWSXRay';

const app = express();

app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(trace);
app.use(responseTime);
app.use(cors);

if (process.env.AWS_XRAY_ENABLED === 'true') app.use(AWSXRay.express.openSegment('express-graphql-example'));
app.all('/graphql', createHandler({
  schema,
  context: context as unknown as OperationContext,
}));
if (process.env.AWS_XRAY_ENABLED === 'true') app.use(AWSXRay.express.closeSegment());

export default app;
