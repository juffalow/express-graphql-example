import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

export default function(types) {
  return new GraphQLObjectType({
    name: 'QuoteEdge',
    description: 'List of edges.',
    fields: () => ({
      node: {
        description: 'The item at the end of the edge.',
        type: types.Quote,
      },
      cursor: {
        description: 'A cursor for pagination.',
        type: GraphQLString,
      },
    }),
  });
}
