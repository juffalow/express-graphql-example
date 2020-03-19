import { GraphQLEnumType } from 'graphql';

export default new GraphQLEnumType({
  name: 'AuthorsOrderField',
  values: {
    ID: {
      value: 'id',
    },
    CREATED_AT: {
      value: 'createdAt',
    },
  },
});
