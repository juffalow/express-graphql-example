import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import models from '../../../models/index.js';
import Leadership from '../../types/queryTypes/05-leadership.js';

export default {
    type: Leadership,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, args) {
        return models.leadership.findById(args.id);
    }
};
