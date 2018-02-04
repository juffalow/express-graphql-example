import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLInputObjectType
} from 'graphql';

import models from '../../../models/index.js';
import Quote from '../../types/quote.js';

export default {
    type: Quote,
    name: 'destroyQuote',
    args: {
      id: { type: GraphQLID },
    },
    resolve(root, args) {
        return models.quote.destroy({where: {id: args.id}});
    }
};

const quote = new GraphQLInputObjectType({
  name: 'destroyQuoteInputType',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
  })
})
