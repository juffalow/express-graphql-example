import http from 'http';
import { createTerminus } from '@godaddy/terminus';
import app from './app';
import config from './config';
import { checkConnection, migrate } from './database';
import logger from './logger';

const server = http.createServer(app);

async function onSignal(): Promise<void> {
  logger.warn('Server is going to shut down! Starting cleanup...');
}

async function onShutdown (): Promise<void> {
  logger.warn('Server is shutting down!');
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
      logger.info(`Server started at http://localhost:${ config.port }`);
    });
  } catch(err) {
    logger.error('Unable to start server!', { error: { message: err.message, stack: err.stack } });
    process.exit(1);
  }
}

start();
