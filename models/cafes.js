module.exports = function(sequelize, DataTypes) {
  let cafes = sequelize.define(
    'cafes',
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
      telephone: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      brand: {
        type: DataTypes.STRING
      },
      smokingRoom: {
        type: DataTypes.BOOLEAN
      },
      parkingLot: {
        type: DataTypes.BOOLEAN
      }
    },
    {
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      tableName: 'cafes'
    }
  );
  return cafes;
};
