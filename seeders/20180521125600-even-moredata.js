'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('author', [
            { name: 'Felipe', last_name: 'Fortes' },
            { name: 'Niels', last_name: 'Bohr' },
            { name: 'Jason', last_name: 'Lengstorf' },
            { name: 'Jamie', last_name: 'Zawinski' },
        ])
        .then(() => {
          return queryInterface.sequelize.query("SELECT id FROM author WHERE name='Felipe' AND last_name='Fortes'");
        })
        .then((ids) => {
          if (ids.length === 0) {
            return;
          }
          const authorId = parseInt(ids[0][0].id);
          return queryInterface.bulkInsert('quote', [
              { author_id: authorId, quote: 'Debugging is like being the detective in a crime movie where you are also the murderer.' },
              { author_id: (authorId + 1), quote: 'An expert is a person who has made all the mistakes that can be made in a very narrow field.' },
              { author_id: (authorId + 2), quote: 'If you stop learning, then the projects you work on are stuck in whatever time period you decided to settle.' },
              { author_id: (authorId + 3), quote: 'Some people, when confronted with a problem, think “I know, I’ll use regular expressions.” Now they have two problems.' },
          ]);
        });
    },

    down: function (queryInterface, Sequelize) {

    }
};
