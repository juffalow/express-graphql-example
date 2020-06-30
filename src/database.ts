import knex from 'knex';
import config from './config';

const database = knex({
  client: 'mysql2',
  ...config.database,
});

if ('migrations' in config.database) {
  database.migrate.latest();
}

if ('seeds' in config.database) {
  database.seed.run({ directory: config.database.seeds.directory });
}

export default database;
