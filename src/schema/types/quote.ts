// tslint:disable:object-literal-sort-keys

import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import IContext from '../../context/IContext';
import author from './author';
import { formatDate } from '../../utils/functions';

const quote = new GraphQLObjectType({
  name: 'Quote',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLID),
      description: 'Globally unique ID of the quote',
      resolve: (obj) => {
        return Buffer.from(`quote-${obj.id}`).toString('base64');
      },
    },
    _id: {
      type: GraphQLNonNull(GraphQLID),
      description: 'Database ID of the quote',
      resolve: (obj) => {
        return obj.id;
      },
    },
    text: {
      type: GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj) => {
        return obj.text;
      },
    },
    author: {
      type: author,
      description: 'Author of the quote',
      resolve: (obj, args, context: IContext) => {
        return context.repositories.author.get(obj.authorId);
      },
    },
    createdAt: {
      type: GraphQLNonNull(GraphQLString),
      description: '',
      resolve: (obj) => {
        return formatDate(new Date(obj.createdAt));
      },
    },
  }),
});

export default quote;
