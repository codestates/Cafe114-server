module.exports = function(sequelize, DataTypes) {
  let images = sequelize.define(
    'images',
    {
      image: {
        type: DataTypes.BLOB,
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
      tableName: 'images'
    }
  );
  return images;
};
