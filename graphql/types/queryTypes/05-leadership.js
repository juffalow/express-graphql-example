import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} from 'graphql';

import Employer from './02-employer.js';
import models from '../../../models/index.js';

export default new GraphQLObjectType({
    name: 'leadership',
    description: 'leadership',
    fields () {
        return {
            id: {
                type: GraphQLID,
                description: "leadership ID",
                resolve (leadership) {
                    return leadership.id;
                }
            },
            photo_source: {
                type: GraphQLString,
                description: "source for leadership photo",
                resolve (leadership) {
                    return leadership.photo_source
                }
            },
            employer: {
              type: Employer,
              description: "owner of the leadership",
              resolve(leadership) {
                return models.employer.findById(leadership.employer_id)
              }
            },
        };
    }
});
