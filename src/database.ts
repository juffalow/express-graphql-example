import { knex } from 'knex';
import config from './config';

const database = knex({
  client: 'mysql2',
  ...config.database,
  pool: { min: 0, max: 7 }
});

export default database;

export async function checkConnection() {
  return database.raw('SELECT 1 + 1 AS result');
}

export async function migrate() {
  return database.migrate.latest({ directory: config.database.migrations.directory });
}
