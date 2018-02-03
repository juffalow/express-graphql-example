import {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import models from '../../../models/index.js';
import Quote from '../../types/quote.js';

export default {
    type: new GraphQLList(Quote),
    args: {
        author_id: {
            type: GraphQLID
        }
    },
    resolve(root, args) {
        return models.quote.findAll({where: args, include: [ { model: models.author } ] });
    }
};
