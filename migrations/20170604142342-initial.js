'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('quote', {
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
        return queryInterface.dropTable('quote');
    }
};
