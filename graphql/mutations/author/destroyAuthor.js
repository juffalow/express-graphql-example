import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType
} from 'graphql';

import models from '../../../models/index.js';
import Author from '../../types/author.js';

//working
export default {
    type: Author,
    name: 'destroyAuthor',
    args: {
      id: { type: GraphQLID },
    },
    resolve(root, args) {
        return models.author.destroy({where: {id: args.id}});
    }
};
