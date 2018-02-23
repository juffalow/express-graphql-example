import models from '../../../models/index.js';
import Author from '../../types/author.js';
import AuthorInput from '../../inputs/author.js';

export default {
    type: Author,
    args: {
        author: {
            type: AuthorInput
        }
    },
    resolve (source, args) {
        return models.author.build({
            name: args.author.name,
            last_name: args.author.last_name
        }).save().then(function(newAuthor) {
            return models.author.findById(newAuthor.id);
        });
    }
};
