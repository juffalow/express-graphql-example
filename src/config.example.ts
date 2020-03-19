// tslint:disable:object-literal-sort-keys

export default {
  port: 3010,
  database: {
    type: 'mysql',
    connection: {
      database : '',
      host : '',
      password : '',
      user : '',
    },
    migrations: {
      directory: __dirname + '/migrations',
    },
  },
  defaultQuery: `

  `,
};
