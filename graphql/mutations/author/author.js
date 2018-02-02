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
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      last_name: { type: GraphQLString }
    },
    resolve(root, args) {
        return models.author.create({id: args.id,name: args.name,last_name: args.last_name});
    }
};
