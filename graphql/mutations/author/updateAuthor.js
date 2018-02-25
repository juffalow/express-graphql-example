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
      input: {type: authorInput }
    },
    resolve(root, {id, input}) {
      return models.author.update({name: input.name, last_name: input.last_name}, {where: {id: id}});

    }
};

const authorInput = new GraphQLInputObjectType({
  name: 'updateAuthorInputType',
  fields: () => ({
    name: { type: GraphQLString },
    last_name: { type: GraphQLString }
  })
})
