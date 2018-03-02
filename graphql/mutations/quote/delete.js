import {
  GraphQLInt,
  GraphQLNonNull
} from 'graphql';
import models from '../../../models/index.js';
import Quote from '../../types/quote.js';

export default {
  type: Quote,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  },
  resolve (source, args) {
    return models.quote
      .findById(args.id)
      .then((quote) => {
        return quote.destroy({ force: true });
      });
  }
};
