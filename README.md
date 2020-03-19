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

Get list of authors (*it will return only first 10 authors!*):

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

Order authors by first name and last name:

```graphql
query {
  authors(orderBy:[
    {
      field:FIRST_NAME
      direction:ASC
    }
    {
      field:LAST_NAME
      direction:ASC
    }
  ]) {
    edges {
      cursor
      node {
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

Create new author:

```GraphQL
mutation {
  createAuthor(input:{
    firstName:"Kent"
    lastName:"Beck"
  }) {
    id
    _id
    firstName
    lastName
  }
}
```

Update existing author:

```GraphQL
mutation {
  updateAuthor(input:{
    id: 1
    firstName: "JOHN"
    lastName: "JOHNSON"
  }) {
    id
    _id
    firstName
    lastName
  }
}
```

## Old version

Here is a link to an old version, that used `sequelize` and did not use connections:
* [1.4.0](https://github.com/juffalow/express-graphql-sequelize-example/tree/1.4.0)

Here is a link to older version, that did not use typescript, and used `buildSchema` method and graphql schema file:
* [2.0.0](https://github.com/juffalow/express-graphql-example/tree/2.0.0)

## License

[MIT license](./LICENSE)
