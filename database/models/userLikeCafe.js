module.exports = function(sequelize, DataTypes) {
  let userLikeCafe = sequelize.define(
    'userLikeCafe',
    {},
    {
      timestamps: false,
      underscored: false,
      freezeTableName: true,
      tableName: 'userLikeCafe'
    }
  );
  return userLikeCafe;
};
