import knex from 'knex';
import config from './config';

const database = knex({
  client: 'mysql2',
  ...config.database,
});

if ('migrations' in config.database) {
  database.migrate.latest();
}

export default database;
