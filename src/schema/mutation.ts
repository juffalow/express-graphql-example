import { GraphQLObjectType } from 'graphql';
import types from './types'

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createAuthor: types.CreateAuthor,
    deleteAuthor: types.DeleteAuthor,
  }),
});

export default mutation;
