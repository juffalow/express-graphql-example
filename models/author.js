module.exports = function(sequelize, DataTypes) {
    var author = sequelize.define('author', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        last_name: {
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

    author.associate = function(models) {
        models.author.hasMany(models.quote, { foreignKey: "author_id", sourceKey: "id" });
    }

    return author;
}
