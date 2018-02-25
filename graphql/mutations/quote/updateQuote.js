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
    name: 'updateQuote',
    args: {
      id: { type: GraphQLID },
      quote: { type: GraphQLString },
    },
    resolve(root, args) {
      return models.quote.update({quote: args.quote}, {where: {id: args.id}});

    }
};
