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

*This will return only first 10 authors!*

If you want to get another 10 authors:

```graphql
query{
	authors(offset: 10){
    id
    name
  }
}
```

Or more than 10 authors:

```graphql
query{
	authors(first: 20){
    id
    name
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

*This will return only first 10 quotes!*

If you want to get another 10 quotes:

```graphql
query{
	quotes(offset: 10){
    id
    quote
  }
}
```

Or more than 10 quotes:

```graphql
query{
	quotes(first: 20){
    id
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

Add new author with some of his quotes:

```graphql
mutation{
  createAuthor(author:{
    name:"Kent",
    last_name:"Beck",
    quotes:[
      {
        quote: "I'm not a great programmer; I'm just a good programmer with great habits."
      },
      {
        quote: "Do The Simplest Thing That Could Possibly Work"
      }
    ]
  }) {
    id
  }
}
```

Delete specific quote ( quote with id 1 ) and return its id and quote text:

```graphql
mutation{
	deleteQuote(id: 1){
    id
    quote
  }
}
```

Update ( change ) specific quote :

```graphql
mutation{
	updateQuote(id: 1, quote: "New version of this quote!"){
    id,
    quote
  }
}
```
