module.exports = function(sequelize, DataTypes) {
  let users = sequelize.define(
    'users',
    {
      name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING
      },
      nickname: {
        type: DataTypes.STRING,
        unique: true
      },
      image: {
        type: DataTypes.STRING
      },
      birth: {
        type: DataTypes.STRING(4)
      },
      sex: {
        type: DataTypes.TINYINT(1)
      },
      phone: {
        type: DataTypes.STRING
      },
      agreementAd: {
        type: DataTypes.TINYINT(1)
      },
      location: {
        type: DataTypes.TINYINT(1)
      },
      kakaoId: {
        type: DataTypes.STRING
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
