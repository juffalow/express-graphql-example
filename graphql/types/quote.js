import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} from 'graphql';

import Author from './author.js';
import models from '../../models/index.js';

export default new GraphQLObjectType({
    name: 'quote',
    description: 'quote',
    fields () {
        return {
            id: {
                type: GraphQLID,
                description: "quote ID",
                resolve (quote) {
                    return quote.id;
                }
            },
            author: {
                type: Author,
                description: "author of this quote",
                resolve (quote) {
                    if (quote.hasOwnProperty('author')) {
                      return quote.author;
                    }
                    return models.author.findById(quote.author_id);
                }
            },
            quote: {
                type: GraphQLString,
                description: "text",
                resolve (quote) {
                    return quote.quote;
                }
            }
        };
    }
});
