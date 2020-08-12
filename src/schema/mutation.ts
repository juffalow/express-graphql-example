import { GraphQLObjectType } from 'graphql';
import createAuthor from './mutations/createAuthor';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: (): any => ({
    createAuthor,
  }),
});

export default mutation;
