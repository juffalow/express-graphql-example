import { GraphQLNonNull } from 'graphql';
import Context from '../../context/Context';
import newAuthor from '../types/inputs/newAuthor';

export default function(types) {
  return {
    type: types.Author,
    args: {
      input: {
        type: new GraphQLNonNull(newAuthor),
      },
    },
    resolve: (_, { input }, context: Context): Promise<any> => {
      return context.repositories.author.create(input)
    },
  };
}
