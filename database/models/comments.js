module.exports = function(sequelize, DataTypes) {
  let comments = sequelize.define(
    'comments',
    {
      comment: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: true,
      underscored: false,
      freezeTableName: true,
      tableName: 'comments'
    }
  );
  comments.associate = function(models) {
    comments.belongsTo(models.users, { as: 'user' });
    comments.belongsTo(models.cafe, { as: 'cafe' });
  };
  return comments;
};
