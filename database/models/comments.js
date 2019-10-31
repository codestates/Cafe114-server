module.exports = function(sequelize, DataTypes) {
  let comments = sequelize.define(
    'comments',
    {
      comment: {
        type: DataTypes.STRING,
        allowNull: false
      },
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
      timestamps: true,
      underscored: false,
      freezeTableName: true,
      tableName: 'comments'
    }
  );
  return comments;
};
