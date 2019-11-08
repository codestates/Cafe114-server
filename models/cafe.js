module.exports = function(sequelize, DataTypes) {
  let cafe = sequelize.define(
    'cafe',
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      subAddress: {
        type: DataTypes.STRING,
        allowNull: false
      },
      gu: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dong: {
        type: DataTypes.STRING,
        allowNull: false
      },
      y: {
        type: DataTypes.STRING,
        allowNull: false
      },
      x: {
        type: DataTypes.STRING,
        allowNull: false
      },
      telephone: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      smokingRoom: {
        type: DataTypes.BOOLEAN
      },
      parkingLot: {
        type: DataTypes.BOOLEAN
      }
    },
    {
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      tableName: 'cafe'
    }
  );
  cafe.associate = function(models) {
    cafe.hasMany(models.comments, { as: 'comments' });
    cafe.belongsToMany(models.users, { through: models.userLikeCafe });
  };
  return cafe;
};
