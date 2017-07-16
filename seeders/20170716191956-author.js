'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('author', [
            { name: 'John', last_name: 'Johnson' },
            { name: 'Martin', last_name: 'Fowler' },
            { name: 'Jason', last_name: 'Lengstorf' },
            { name: 'Linus', last_name: 'Torvalds' }
        ]).then(function() {
            return queryInterface.sequelize.query("UPDATE quote SET author_id=1 WHERE quote='First, solve the problem. Then, write the code.'");
        }).then(function() {
            return queryInterface.sequelize.query("UPDATE quote SET author_id=2 WHERE quote='Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'");
        }).then(function() {
            return queryInterface.sequelize.query("UPDATE quote SET author_id=3 WHERE quote='If you stop learning, then the projects you work on are stuck in whatever time period you decided to settle.'");
        }).then(function() {
            return queryInterface.bulkInsert('quote', [
                { author_id: 4, quote: 'Bad programmers worry about the code. Good programmers worry about the data structures and their relationships.' }
            ]);
        });
    },

    down: function (queryInterface, Sequelize) {

    }
};
