'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('author', [
            { name: 'Robert', last_name: 'Martin' },
            { name: 'Bill', last_name: 'Gates' }
        ]).then(function() {
            return queryInterface.bulkInsert('quote', [
                { author_id: 4, quote: 'Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.' },
                { author_id: 4, quote: "When you say 'I wrote a program that crashed Windows,' people just stare at you blankly and say 'Hey, I got those with the system, for free.'" },
                { author_id: 4, quote: 'A computer is like air conditioning - it becomes useless when you open Windows.' },
                { author_id: 4, quote: 'If you think your users are idiots, only idiots will use it.' },
                { author_id: 5, quote: 'You should name a variable using the same care with which you name a first-born child.' },
                { author_id: 6, quote: 'If you are born poor, it is not your mistake, but if you die poor it is your mistake.' },
                { author_id: 6, quote: 'No one will need more than 637Kb of memory for a personal computer.' }
            ]);
        });
    },

    down: function (queryInterface, Sequelize) {

    }
};
