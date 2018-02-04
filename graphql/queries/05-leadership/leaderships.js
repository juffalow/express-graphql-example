import {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import models from '../../../models/index.js';
import Leadership from '../../types/05-leadership.js';

export default {
    type: new GraphQLList(Leadership),
    args: {

    },
    resolve(root, args) {
        return models.leadership.findAll({where: args});
    }
};
