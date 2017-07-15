'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('quote', [
            { quote: 'First, solve the problem. Then, write the code.' },
            { quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.' },
            { quote: 'If you stop learning, then the projects you work on are stuck in whatever time period you decided to settle.' }
        ]);
    },
    down: function (queryInterface, Sequelize) {

    }
};
