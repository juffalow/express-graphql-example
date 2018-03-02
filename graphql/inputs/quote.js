import {
  GraphQLInputObjectType,
  GraphQLString,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'quoteinput',
  fields: () => ({
      quote: { type: GraphQLString }
  })
});
