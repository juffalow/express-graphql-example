import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLID
} from 'graphql';

// import Position from './06-position.js';
import models from '../../models/index.js';

export default new GraphQLObjectType({
    name: 'experience',
    description: 'experience',
    fields () {
        return {
            id: {
              type: GraphQLID,
              description: "experience id",
              resolve (experience) {
                return experience.id;
              }
            },
            company_name: {
              type: GraphQLString,
              description: 'compnay name',
              resolve(experience) {
                return experience.bio;
              }
            },
            start_date: {
              type: GraphQLInt,
              description: 'start date',
              resolve(experience) {
                return experience.start_date;
              }
            },
            end_date: {
              type: GraphQLInt,
              description: 'end date',
              resolve(experience) {
                return experience.end_date;
              }
            },
            // positions: {
            //   type: new GraphQLList(Position),
            //   description: "list of positions at experience",
            //   resolve(experience) {
            //       return models.position.findAll({ where: { position_id: experience.id } });
            //   }
            // },
        };
    }
});
