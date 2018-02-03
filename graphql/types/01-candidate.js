import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID
} from 'graphql';

import Experience from './04-experience.js'
import models from '../../models/index.js';

export default new GraphQLObjectType({
    name: 'candidate',
    description: 'candidate',
    fields () {
        return {
            id: {
              type: GraphQLID,
              description: "candidate id",
              resolve (candidate) {
                return candidate.id;
              }
            },
            bio: {
              type: GraphQLString,
              description: 'personal biography',
              resolve(candidate) {
                return candidate.bio;
              }
            },
            language: {
              type: GraphQLString,
              description: 'spoken languages',
              resolve(candidate) {
                return candidate.language;
              }
            },
            pfts: {
              type: GraphQLString,
              description: 'part time, full time, seasonal, temp',
              resolve(candidate) {
                return candidate.pfts;
              }
            },
            availability: {
              type: GraphQLString,
              description: 'current availability',
              resolve(candidate) {
                return candidate.availability;
              }
            },
            education_certification_training: {
              type: GraphQLString,
              description: 'education, certification, and training',
              resolve(candidate) {
                return candidate.education_certification_training;
              }
            },
            experiences: {
              type: new GraphQLList(Experience),
              description: "list of previous job experiences",
              resolve(candidate) {
                  return models.experience.findAll({ where: { experience_id: candidate.id } });
              }
            },
            // positions: {
            //   type: new GraphQLList(Position),
            //   description: "list of photos for user",
            //   resolve(candidate) {
            //       return models.position.findAll({ where: { position_id: candidate.id } });
            //   }
            // }
        };
    }
});
