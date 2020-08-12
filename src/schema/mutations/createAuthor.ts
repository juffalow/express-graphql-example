import { GraphQLNonNull } from 'graphql';
import Context from '../../context/Context';
import { default as authorType } from '../types/author';
import newAuthor from '../types/inputs/newAuthor';

const createAuthor = {
  type: authorType,
  args: {
    input: {
      type: GraphQLNonNull(newAuthor),
    },
  },
  resolve: (_, { input }, context: Context): Promise<any> => {
    return context.repositories.author.create(input)
  },
};

export default createAuthor;
