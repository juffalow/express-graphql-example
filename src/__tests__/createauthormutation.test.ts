import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import context from '../context';
import schema from '../schema';
import database from '../database';

afterAll(() => {
  return database.destroy();
});

test('createAuthor mutation', async () => {
  const app = express();

  app.use('/graphql', graphqlHTTP({
    context,
    schema,
  }));

  const query = `
    mutation {
      createAuthor(input: {
        firstName: "Matej"
        lastName: "Jellus"
      }) {
        id
        _id
        firstName
        lastName
      }
    }
  `;

  const response = await request(app)
    .post('/graphql')
    .type('json')
    .send(JSON.stringify({ query }));

  expect(response.statusCode).toEqual(200);

  expect(JSON.parse(response.text)).toEqual({
    data: {
      createAuthor: {
        id: 'YXV0aG9yLTEw',
        _id: '10',
        firstName: 'Matej',
        lastName: 'Jellus',
      }
    }
  });

  await database('author').where('id', 10).del();
});
