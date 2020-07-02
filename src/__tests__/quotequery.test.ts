import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import context from '../context';
import schema from '../schema';
import database from '../database';

afterAll(() => {
  return database.destroy();
});

test('Quote query', async () => {
  const app = express();

  app.use('/graphql', graphqlHTTP({
    context,
    schema,
  }));

  const query = `
    query {
      quote(id: 1) {
        id
        _id
        text
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
      quote: {
        id: 'cXVvdGUtMQ==',
        _id: '1',
        text: 'First, solve the problem. Then, write the code.',
      }
    }
  });
});
