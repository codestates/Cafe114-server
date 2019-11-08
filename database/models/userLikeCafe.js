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
  userLikeCafe.associate = function(models) {
    userLikeCafe.belongsTo(models.users, { as: 'user' });
    userLikeCafe.belongsTo(models.cafe, { as: 'cafe' });
  };
  return userLikeCafe;
};
