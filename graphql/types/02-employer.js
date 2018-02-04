import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID
} from 'graphql';

import Leadership from './05-leadership.js';
import models from '../../models/index.js';

export default new GraphQLObjectType({
    name: 'employer',
    description: 'employer',
    fields () {
        return {
            id: {
              type: GraphQLID,
              description: "employer id",
              resolve (employer) {
                return employer.id;
              }
            },
            company_name: {
              type: GraphQLString,
              description: 'company name',
              resolve(employer) {
                return employer.company_name;
              }
            },
            letter: {
              type: GraphQLString,
              description: 'culture letter',
              resolve(employer) {
                return employer.letter;
              }
            },
            benefits: {
              type: GraphQLString,
              description: 'company benefits',
              resolve(employer) {
                return employer.benefits;
              }
            },
            video: {
              type: GraphQLString,
              description: 'video',
              resolve(employer) {
                return employer.video;
              }
            },
            instagram: {
              type: GraphQLString,
              description: 'instagram',
              resolve(employer) {
                return employer.instagram;
              }
            },
            leadership: {
              type: new GraphQLList(Leadership),
              description: "list of leaders and managers",
              resolve(employer) {
                  return models.leadership.findAll({ where: { leader_id: employer.id } });
              }
            }
        };
    }
});
