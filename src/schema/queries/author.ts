import { GraphQLID, GraphQLNonNull } from 'graphql';
import Context from '../../context/Context';
import types from '../types';

const author = {
  type: types.Author,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (_, { id }, context: Context): Promise<any> => {
    return context.repositories.author.get(parseInt(id));
  },
};

export default author;
