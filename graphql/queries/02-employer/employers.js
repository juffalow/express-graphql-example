import {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import models from '../../../models/index.js';
import Employer from '../../types/queryTypes/02-employer.js';

export default {
    type: new GraphQLList(Employer),
    args: {

    },
    resolve(root, args) {
        return models.employer.findAll({where: args});
    }
};
