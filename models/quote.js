module.exports = function(sequelize, DataTypes) {
    var quote = sequelize.define('quote', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        author_id: {
            type: DataTypes.INTEGER
        },
        quote: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    quote.associate = function(models) {
        models.quote.belongsTo(models.author, { foreignKey: "author_id", targetKey: "id" });
    }

    return quote;
}
