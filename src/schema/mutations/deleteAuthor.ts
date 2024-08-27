import { GraphQLNonNull } from 'graphql';
import Context from '../../context/Context';
import deleteAuthorInput from '../types/inputs/deleteAuthor';

export default function(types) {
  return {
    type: types.Author,
    args: {
      input: {
        type: new GraphQLNonNull(deleteAuthorInput),
      },
    },
    resolve: (_, { input }, context: Context): Promise<any> => {
      return context.repositories.author.delete(input.id);
    },
  };
}
