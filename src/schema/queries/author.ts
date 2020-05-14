// tslint:disable:object-literal-sort-keys

import { GraphQLID, GraphQLNonNull } from 'graphql';
import Context from '../../context/Context';
import { default as authorType } from '../types/author';

const author = {
  type: authorType,
  args: {
    id: {
      type: GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (_, { id }, context: Context): Promise<any> => {
    return context.repositories.author.get(id);
  },
};

export default author;
