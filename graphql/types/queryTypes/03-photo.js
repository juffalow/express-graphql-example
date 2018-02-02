import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} from 'graphql';

import GenUser from './00-genUser.js';
import models from '../../../models/index.js';

export default new GraphQLObjectType({
    name: 'photo',
    description: 'photo',
    fields () {
        return {
            id: {
                type: GraphQLID,
                description: "quote ID",
                resolve (photo) {
                    return photo.id;
                }
            },
            source: {
                type: GraphQLString,
                description: "source for photo",
                resolve (photo) {
                    return photo.source
                }
            },
            genUser: {
              type: GenUser,
              description: "owner of the photo",
              resolve(photo) {
                return models.genUser.findById(photo.genUser_id)
              }
            }
        };
    }
});
