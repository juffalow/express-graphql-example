import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import models from '../../../models/index.js';
import GenUser from '../../types/queryTypes/00-genUser.js';

export default {
    type: GenUser,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, args) {
        return models.genUser.findById(args.id);
    }
};
