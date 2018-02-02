import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import models from '../../../models/index.js';
import Candidate from '../../types/queryTypes/01-candidate.js';

export default {
    type: Candidate,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, args) {
        return models.candidate.findById(args.id);
    }
};
