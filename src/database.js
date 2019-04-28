import Knex from 'knex';

export default new Knex({
  client: 'mysql2',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'sequelize_example'
  }
});
