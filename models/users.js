module.exports = function(sequelize, DataTypes) {
  let users = sequelize.define(
    'users',
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nickname: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      location: {
        type: DataTypes.TINYINT(1)
      }
    },
    {
      timestamps: true,
      underscored: false,
      freezeTableName: true,
      tableName: 'users'
    }
  );
  return users;
};
