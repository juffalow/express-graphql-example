import {
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql';

import queries from './queries';
import mutations from './mutations';

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: queries
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutations
    })
});
