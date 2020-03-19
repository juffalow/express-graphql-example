// tslint:disable:object-literal-sort-keys

import { GraphQLID, GraphQLNonNull } from 'graphql';
import IContext from '../../context/IContext';
import { default as authorType } from '../types/author';

const author = {
  type: authorType,
  args: {
    id: {
      type: GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (_, { id }, context: IContext) => {
    return context.repositories.author.get(id);
  },
};

export default author;
