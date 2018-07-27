import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import QuoteInput from './quote.js';

export default new GraphQLInputObjectType({
  name: 'authorinput',
  fields: () => ({
      name: { type: GraphQLString },
      last_name: { type: GraphQLString },
      name: { type: GraphQLString },
      quotes: { type: new GraphQLList(QuoteInput) }
  })
});
