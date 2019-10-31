module.exports = function(sequelize, DataTypes) {
  let userLikeCafe = sequelize.define(
    'userLikeCafe',
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      cafeId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: false,
      underscored: false,
      freezeTableName: true,
      tableName: 'userLikeCafe'
    }
  );
  return userLikeCafe;
};
