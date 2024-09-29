import http from 'http';
import { createTerminus } from '@godaddy/terminus';
import app from './app';
import config from './config';
import { checkConnection, migrate } from './database';

const server = http.createServer(app);

async function onSignal(): Promise<void> {
  console.warn('Server is going to shut down! Starting cleanup...');
}

async function onShutdown (): Promise<void> {
  console.warn('Server is shutting down!');
}

async function onHealthCheck(): Promise<void> {
  return;
}

createTerminus(server, {
  healthChecks: {
    '/health/liveness': onHealthCheck,
  },
  onSignal,
  onShutdown,
});

async function start(): Promise<void> {
  try {
    if (typeof config.database.connection.host === 'string') {
      await checkConnection();

      if ('migrations' in config.database) {
        await migrate();
      }
    }

    server.listen(config.port, () => {
      console.log(`Server started at http://localhost:${ config.port }`);
    });
  } catch(error) {
    process.exit(1);
  }
}

start();
