'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('author', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            last_name: {
                type: Sequelize.STRING,
                allowNull: false
            }
        }).then(function() {
            return queryInterface.addColumn('quote', 'author_id', {
                type: Sequelize.INTEGER,
                after: 'id'
            });
        }).then(function() {
            return queryInterface.addConstraint('quote', [ 'author_id' ], {
                type: 'FOREIGN KEY',
                name: 'author',
                references: {
                    table: 'author',
                    field: 'id'
                },
                onDelete: 'cascade'
            });
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeConstraint('quote', 'author').then(function() {
            return queryInterface.removeColumn('quote', 'author_id');
        }).then(function() {
            return queryInterface.dropTable('author');
        });
    }
};
