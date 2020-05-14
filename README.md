# Express, GraphQL example

[![License](https://img.shields.io/badge/License-MIT-blue.svg?maxAge=2592000)](https://github.com/juffalow/express-graphql-sequelize-example/blob/master/LICENSE)

![out](https://user-images.githubusercontent.com/8142965/56870885-6e11dd00-6a16-11e9-8bba-230476808af2.png)

## How to run the project

Install dependencies :

```shell
yarn

# or

npm install
```

Create `src/config.ts` or rename `src/config.example.js` and update file with your credentials:

```js
export default {
  port: 3013,
  database: {
    type: 'mysql',
    connection: {
      database : '',
      host : '',
      password : '',
      user : '',
    },
    /*
     * Migrations run on every start of the application.
     * If you initialized the database manually (from the database.sql file),
     * you don't need this.
     */
    migrations: {
      directory: __dirname + '/migrations',
    },
  },
};
```

Run the project :

```shell
yarn start

# on

npm start
```

Open GraphiQL in your browser [http://localhost:3010/graphql](http://localhost:3010/graphql)

## Examples

You can find example queries in [EXAMPLES.md](./EXAMPLES.md).

## Old version

Here is a link to an old version, that used `sequelize` and did not use connections:
* [1.4.0](https://github.com/juffalow/express-graphql-sequelize-example/tree/1.4.0)

Here is a link to older version, that did not use typescript, and used `buildSchema` method and graphql schema file:
* [2.0.0](https://github.com/juffalow/express-graphql-example/tree/2.0.0)

## License

[MIT license](./LICENSE)
