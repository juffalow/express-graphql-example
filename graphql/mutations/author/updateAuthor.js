import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType
} from 'graphql';

import models from '../../../models/index.js';
import Author from '../../types/author.js';

//working
export default {
    type: Author,
    name: 'updateAuthor',
    args: {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      last_name: { type: GraphQLString }
    },
    resolve(root, args) {
      return models.author.update({name: args.name, last_name: args.last_name}, {where: {id: args.id}});

    }
};

const author = new GraphQLInputObjectType({
  name: 'updateAuthorInputType',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    last_name: { type: new GraphQLNonNull(GraphQLString) }
  })
})
