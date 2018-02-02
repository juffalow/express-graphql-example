import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLID
} from 'graphql';

import Photo from './03-photo.js';
// import Blocked from './blocked.js';
import models from '../../../models/index.js';

export default new GraphQLObjectType({
    name: 'genUser',
    description: 'genUser',
    fields () {
        return {
            id: {
                type: GraphQLID,
                description: "quote ID",
                resolve (genUser) {
                    return genUser.id;
                }
            },
            first_name: {
              type: GraphQLString,
              description: 'first name',
              resolve(genUser) {
                return genUser.first_name;
              }
            },
            last_name: {
              type: GraphQLString,
              description: 'last name',
              resolve(genUser) {
                return genUser.last_name;
              }
            },
            email: {
              type: GraphQLString,
              description: 'email',
              resolve(genUser) {
                return genUser.email;
              }
            },
            city: {
              type: GraphQLString,
              description: 'city',
              resolve(genUser) {
                return genUser.city;
              }
            },
            state: {
              type: GraphQLString,
              description: 'state',
              resolve(genUser) {
                return genUser.state;
              }
            },
            phone: {
              type: GraphQLInt,
              description: 'phone number',
              resolve(genUser) {
                return genUser.phone
              }
            },
            address: {
              type: GraphQLString,
              description: 'address',
              resolve(genUser) {
                return genUser.address;
              }
            },
            photos: {
              type: new GraphQLList(Photo),
              description: "list of photos for user",
              resolve(genUser) {
                  return models.photo.findAll({ where: { photo_id: genUser.id } });
              }
            },
            // blockeds: {
            //   type: new GraphQLList(Blocked),
            //   description: "list of blocked users",
            //   resolve(genUser) {
            //       return models.blocked.findAll({ where: { blocked_id: genUser.id } });
            //   }
            // }
        };
    }
});
