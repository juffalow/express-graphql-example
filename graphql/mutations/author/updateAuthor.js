import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType
} from 'graphql';

import models from '../../../models/index.js';
import Author from '../../types/author.js';

export default {
    type: Author,
    name: 'updateAuthor',
    args: {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      last_name: { type: GraphQLString }
    },
    resolve(root, args) {
        return models.updateAuthor.update({id: args.id, name: args.name,last_name: args.last_name});
    }
};

const updateAuthor = new GraphQLInputObjectType({
  name: 'updateAuthorInputType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    last_name: { type: new GraphQLNonNull(GraphQLString) }
  })
})
