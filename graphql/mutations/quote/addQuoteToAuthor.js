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
      author_id: { type: GraphQLID },
      quote: { type: GraphQLString }
    },
    resolve(root, {author_id, quote}) {
        return models.quote.create({author_id: author_id, quote: quote});
    }
};
