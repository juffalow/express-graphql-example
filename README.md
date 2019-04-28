# Express, GraphQL and Sequelize example

![out](https://user-images.githubusercontent.com/8142965/28421804-7dc7aa9e-6d66-11e7-9e1d-0c6c5b804464.gif)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?maxAge=2592000)](https://github.com/juffalow/express-graphql-sequelize-example/blob/master/LICENSE)

## How to run the project

Install dependencies :

```shell
yarn

# or

npm install
```

Update `src/database.js` file with your credentials:

```js
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
```

Run the project :

```shell
npm start
```

Open GraphiQL in your browser [http://localhost:8088/graphql](http://localhost:8088/graphql)

## Examples

Get list of authors:

```graphql
query {
  authors {
    edges {
      node {
        id
        _id
        firstName
        lastName
      }
    }
  }
}
```

*This will return only first 10 authors!*

Filter authors based of first name, also return total number of such authors:

```graphql
query {
  authors(firstName: "Robert") {
    totalCount
    edges {
      node {
        id
        _id
        firstName
        lastName
      }
    }
  }
}
```

Get name of author with ID = 4:

```GraphQL
query {
  author(id: 4) {
    id
    _id
    firstName
    lastName
  }
}
```

Get list of quotes:

```GraphQL
query {
  quotes {
    edges {
      node {
        id
        _id
        quote
      }
    }
  }
}
```

## Old version

Here is a link to an old version, that used `sequelize` and did not use connections:

* [1.4.0](https://github.com/juffalow/express-graphql-sequelize-example/tree/1.4.0)

## License

[MIT license](./LICENSE)
