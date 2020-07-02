import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import context from '../context';
import schema from '../schema';
import database from '../database';

afterAll(() => {
  return database.destroy();
});

test('Authors query', async () => {
  const app = express();

  app.use('/graphql', graphqlHTTP({
    context,
    schema,
  }));

  const query = `
    query {
      quotes(first: 3) {
        edges {
          node {
            id
            _id
            text
          }
        }
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
      quotes: {
        edges: [
          {
            node: {
              id: 'cXVvdGUtMQ==',
              _id: '1',
              text: 'First, solve the problem. Then, write the code.',
            }
          },
          {
            node: {
              id: 'cXVvdGUtMg==',
              _id: '2',
              text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
            }
          },
          {
            node: {
              id: 'cXVvdGUtMw==',
              _id: '3',
              text: 'If you stop learning, then the projects you work on are stuck in whatever time period you decided to settle.',
            }
          },
        ]
      }
    }
  });
});
