import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import models from '../../../models/index.js';
import author from '../inputTypes/author.js';
import Author from '../../types/queryTypes/author.js';

export default {
    type: Author,
    name: 'addAuthor',
    args: {
      author: { type: author }
    },
    resolve(root, args) {
        return models.author.add(args.id);
    }
};
