import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import responseTime from './middlewares/reponseTime';
import cors from './middlewares/cors';
import config from './config';
import context from './context';
import schema from './schema';
import { checkConnection, migrate } from './database';

const app = express();

app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(responseTime);
app.use(cors);

app.all('/graphql', createHandler({
  schema,
  context: context as any,
}));

async function start(): Promise<void> {
  try {
    if (typeof config.database.connection.host === 'string') {
      await checkConnection();

      if ('migrations' in config.database) {
        await migrate();
      }
    }

    app.listen(config.port, () => {
      console.log(`Server started at http://localhost:${ config.port }`);
    });
  } catch(error) {
    process.exit(1);
  }
}

start();
