import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType
} from 'graphql';

import models from '../../../models/index.js';
import Author from '../../types/author.js';

//working
export default {
    type: Author,
    name: 'createAuthor',
    args: {
      name: { type: GraphQLString },
      last_name: { type: GraphQLString }
    },
    resolve(root, args) {
        return models.author.create({name: args.name,last_name: args.last_name});
    }
};
