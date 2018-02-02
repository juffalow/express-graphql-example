import {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import models from '../../../models/index.js';
import Experience from '../../types/queryTypes/04-experience.js';

export default {
    type: new GraphQLList(Experience),
    args: {

    },
    resolve(root, args) {
        return models.experience.findAll({where: args});
    }
};
