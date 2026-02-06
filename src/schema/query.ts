import { GraphQLObjectType } from 'graphql';
import author from './queries/author';
import authors from './queries/authors';
import quote from './queries/quote';
import quotes from './queries/quotes';

const query = new GraphQLObjectType({
  name: 'Query',
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  fields: (): any => ({
    author,
    authors,
    quote,
    quotes,
  }),
});

export default query;
