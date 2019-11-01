module.exports = function(sequelize, DataTypes) {
  let images = sequelize.define(
    'images',
    {
      image: {
        type: DataTypes.BLOB,
        allowNull: false
      }
    },
    {
      timestamps: false,
      underscored: false,
      freezeTableName: true,
      tableName: 'images'
    }
  );
  images.associate = function(models) {
    images.belongsTo(models.cafe, { as: 'cafe' });
  };
  return images;
};
