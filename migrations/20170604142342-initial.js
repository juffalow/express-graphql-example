'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('quotes', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            quote: {
                type: Sequelize.STRING,
                allowNull: false
            },
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('quotes');
    }
};
