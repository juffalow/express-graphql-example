import { GraphQLID, GraphQLNonNull } from 'graphql';
import Context from '../../context/Context';
import types from '../types'

const quote = {
  type: types.Quote,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (_, { id }, context: Context) => {
    return context.repositories.quote.get(parseInt(id));
  },
};

export default quote;
