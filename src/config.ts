export default {
  port: process.env.PORT || 3010,
  logger: {
    level: process.env.LOG_LEVEL || 'debug',
  },
  database: {
    type: 'mysql',
    connection: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
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
