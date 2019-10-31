module.exports = function(sequelize, DataTypes) {
  let cafes = sequelize.define(
    'cafes',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      telephone: {
        type: DataTypes.STRING
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      detailCategory: {
        type: DataTypes.STRING
      },
      smokingRoom: {
        type: DataTypes.TINYINT(1)
      },
      parkingLot: {
        type: DataTypes.TINYINT(1)
      }
    },
    {
      timestamps: true,
      underscored: false,
      freezeTableName: true,
      tableName: 'cafes'
    }
  );
  cafes.associate = function(models) {
    cafes.hasMany(models.comments);
    cafes.hasMany(models.images);
    cafes.belongsToMany(models.users, { through: models.userLikeCafe });
  };
  return cafes;
};
