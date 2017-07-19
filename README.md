# Express, GraphQL and Sequelize example


## How to run the project

Install dependencies :

```
yarn

# or

npm install
```

Edit `config/config.json` :

```
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

```
sequelize db:migrate

sequelize db:seed:all
```

Run the project :

```
npm start
```

Open GraphiQL in your browser [http://localhost:8088/graphql](http://localhost:8088/graphql)
