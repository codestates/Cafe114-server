const secret = require('../../../secret');

module.exports = {
  development: {
    username: secret.id,
    password: secret.password,
    database: secret.database,
    host: secret.host,
    dialect: 'mysql',
    operatorsAliases: false
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false
  },
  production: {
    username: secret.id,
    password: secret.password,
    database: secret.database,
    host: secret.host,
    dialect: 'mysql',
    operatorsAliases: false
  }
};
