# Express, GraphQL and Sequelize example

![out](https://user-images.githubusercontent.com/8142965/28421804-7dc7aa9e-6d66-11e7-9e1d-0c6c5b804464.gif)

## How to run the project

Install dependencies :

```shell
yarn

# or

npm install
```

Edit `config/config.json` :

```json
{
    "development": {
        "username": "root",
        "password": null,
        "database": "sequelize-example",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "test": {
        ...
    },
    "production": {
        ...
    }
}
```

Init and seed database :

```shell
sequelize db:migrate

sequelize db:seed:all
```

Run the project :

```shell
npm start
```

Open GraphiQL in your browser [http://localhost:8088/graphql](http://localhost:8088/graphql)

## Examples

Get list of authors:

```graphql
query{
  authors{
    name
    last_name
  }
}
```

Get name of author with ID = 4:

```GraphQL
query{
	author(id:4){
    name
  }
}
```

Get list of quotes:

```graphql
query{
	quotes{
    quote
  }
}
```

Add new author and get his ID:

```graphql
mutation{
  createAuthor(author:{
    name:"Kent",
    last_name:"Beck"
  }) {
    id
  }
}
```
