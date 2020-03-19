// tslint:disable:object-literal-sort-keys

import { GraphQLObjectType } from 'graphql';
import author from './queries/author';
import authors from './queries/authors';
import quote from './queries/quote';
import quotes from './queries/quotes';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    author,
    authors,
    quote,
    quotes,
  },
});

export default query;
