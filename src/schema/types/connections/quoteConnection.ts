// tslint:disable:object-literal-sort-keys

import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql';
import pageInfo from '../pageInfo';
import quoteEdge from '../edges/quoteEdge';

const quoteConnection = new GraphQLObjectType({
  name: 'QuoteConnection',
  fields: {
    totalCount: {
      description: 'Identifies the total count of items in the connection.',
      type: GraphQLNonNull(GraphQLInt),
    },
    edges: {
      description: 'A list of edges.',
      type: new GraphQLList(quoteEdge),
    },
    pageInfo: {
      type: GraphQLNonNull(pageInfo),
    },
  },
});

export default quoteConnection;
