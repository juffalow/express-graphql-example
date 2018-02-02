import {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import models from '../../../models/index.js';
import Candidate from '../../types/queryTypes/01-candidate.js';

export default {
    type: new GraphQLList(Candidate),
    args: {

    },
    resolve(root, args) {
        return models.candidate.findAll({where: args});
    }
};
