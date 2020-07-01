export default {
  port: 3010,
  database: {
    type: 'mysql',
    connection: {
      database: 'test',
      host: '127.0.0.1',
      port: 3306,
      password: 'password',
      user: 'user',
    },
    migrations: {
      directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds',
    },
  },
  defaultQuery: `

  `,
};
