import { GraphQLEnumType } from 'graphql';

export default new GraphQLEnumType({
  name: 'AuthorOrderField',
  values: {
    ID: {
      value: 'id',
    },
    FIRST_NAME: {
      value: 'firstName',
    },
    LAST_NAME: {
      value: 'lastName',
    },
  },
});
