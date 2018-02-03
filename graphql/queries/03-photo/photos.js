import {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import models from '../../../models/index.js';
import Photo from '../../types/03-photo.js';

export default {
    type: new GraphQLList(Photo),
    args: {

    },
    resolve(root, args) {
        return models.photo.findAll({where: args});
    }
};
