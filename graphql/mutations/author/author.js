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
      name: { type: GraphQLString },
      last_name: { type: GraphQLString }
    },
    resolve(root, args) {
        return models.author.create({name: args.name,last_name: args.last_name});
    }
};
