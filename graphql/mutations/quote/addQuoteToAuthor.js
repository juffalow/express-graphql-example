import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType
} from 'graphql';

import models from '../../../models/index.js';
import Quote from '../../types/quote.js';

export default {
    type: Quote,
    name: 'addQuote',
    args: {
      id: { type: GraphQLID },
      quote: { type: GraphQLString }
    },
    resolve(root, args) {
        return models.quote.create({author_id: args.id, quote: args.quote});
    }
};

const quote = new GraphQLInputObjectType({
  name: 'addQuoteInputType',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    quote: { type: new GraphQLNonNull(GraphQLString) },
  })
})
