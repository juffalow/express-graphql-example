import {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import models from '../../../models/index.js';
import GenUser from '../../types/00-genUser.js';

export default {
    type: new GraphQLList(GenUser),
    args: {

    },
    resolve(root, args) {
        return models.genUser.findAll({where: args});
    }
};
