import {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import models from '../../../models/index.js';
import Author from '../../types/author.js';

export default {
    type: new GraphQLList(Author),
    args: {

    },
    resolve(root, args) {
        return models.author.findAll({where: args});
    }
};
