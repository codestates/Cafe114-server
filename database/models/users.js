module.exports = function(sequelize, DataTypes) {
  let users = sequelize.define(
    'users',
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nickname: {
        type: DataTypes.STRING,
        unique: true
      },
      location: {
        type: DataTypes.TINYINT(1)
      }
    },
    {
      timestamps: true,
      underscored: false,
      freezeTableName: true,
      tableName: 'users'
    }
  );
  users.associate = function(models) {
    users.hasMany(models.comments);
    users.belongsToMany(models.cafe, { through: models.userLikeCafe });
  };
  return users;
};
