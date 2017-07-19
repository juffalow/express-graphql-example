import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} from 'graphql';

import Quote from './quote.js';
import models from '../../models/index.js';

export default new GraphQLObjectType({
    name: 'author',
    description: 'author',
    fields () {
        return {
            id: {
                type: GraphQLID,
                description: "author's ID",
                resolve (author) {
                    return author.id;
                }
            },
            name: {
                type: GraphQLString,
                description: "author name",
                resolve (author) {
                    return author.name;
                }
            },
            last_name: {
                type: GraphQLString,
                description: "author last name",
                resolve (author) {
                    return author.last_name;
                }
            },
            quotes: {
                type: new GraphQLList(Quote),
                description: "author quotes",
                resolve(author) {
                    return models.quote.findAll({ where: { author_id: author.id } });
                }
            }
        };
    }
});
