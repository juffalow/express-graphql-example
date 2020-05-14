// tslint:disable:object-literal-sort-keys

import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import Context from '../../context/Context';
import author from './author';
import { formatDate } from '../../utils/functions';

const quote = new GraphQLObjectType({
  name: 'Quote',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLID),
      description: 'Globally unique ID of the quote',
      resolve: (obj): string => {
        return Buffer.from(`quote-${obj.id}`).toString('base64');
      },
    },
    _id: {
      type: GraphQLNonNull(GraphQLID),
      description: 'Database ID of the quote',
      resolve: (obj): number => {
        return obj.id;
      },
    },
    text: {
      type: GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj): string => {
        return obj.text;
      },
    },
    author: {
      type: author,
      description: 'Author of the quote',
      resolve: (obj, args, context: Context): Promise<any> => {
        return context.repositories.author.get(obj.authorId);
      },
    },
    createdAt: {
      type: GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj): string => {
        return formatDate(new Date(obj.createdAt));
      },
    },
  }),
});

export default quote;
