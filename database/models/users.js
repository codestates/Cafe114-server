module.exports = function(sequelize, DataTypes) {
  let users = sequelize.define(
    'users',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
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
      birth: {
        type: DataTypes.STRING(4)
      },
      sex: {
        type: DataTypes.TINYINT(1),
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING
      },
      agreementAd: {
        type: DataTypes.TINYINT(1)
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
