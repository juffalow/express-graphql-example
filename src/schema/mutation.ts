import { GraphQLObjectType } from 'graphql';
import createAuthor from './mutations/createAuthor';
import deleteAuthor from './mutations/deleteAuthor';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: (): any => ({
    createAuthor,
    deleteAuthor,
  }),
});

export default mutation;
