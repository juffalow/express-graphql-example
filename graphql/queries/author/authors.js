import {
  GraphQLList,
  GraphQLID,
  GraphQLInt,
} from 'graphql';

import models from '../../../models/index.js';
import Author from '../../types/author.js';

export default {
  type: new GraphQLList(Author),
  args: {
    first: {
      type: GraphQLInt,
      description: 'Limits the number of results returned in the page. Defaults to 10.',
    },
    offset: {
      type: GraphQLInt,
    },
  },
  resolve(root, args) {
    const offset = args.offset || 0;
    const limit = args.first || 10;
    delete args.offset;
    delete args.first;
    return models.author.findAll({where: args, include: [ { model: models.quote } ], offset, limit});
  }
};
