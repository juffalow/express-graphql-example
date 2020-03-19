// tslint:disable:object-literal-sort-keys

import { GraphQLID, GraphQLNonNull } from 'graphql';
import IContext from '../../context/IContext';
import { default as quoteType } from '../types/quote';

const quote = {
  type: quoteType,
  args: {
    id: {
      type: GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (_, { id }, context: IContext) => {
    return context.repositories.quote.get(id);
  },
};

export default quote;
