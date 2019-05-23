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

Update `src/database.js` file with your credentials:

```js
import Knex from 'knex';

export default new Knex({
  client: 'mysql2',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'express-graphql-example'
  }
});
```

Init the database. You can find the SQL script int [database.sql](./database.sql).

Run the project :

```shell
npm start
```

Open GraphiQL in your browser [http://localhost:8088/graphql](http://localhost:8088/graphql)

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

## License

[MIT license](./LICENSE)
