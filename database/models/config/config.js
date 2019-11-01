require('dotenv').config();

module.exports = {
  development: {
    username: process.env.id,
    password: process.env.password,
    database: process.env.database,
    host: process.env.host,
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
    username: process.env.id,
    password: process.env.password,
    database: process.env.database,
    host: process.env.host,
    dialect: 'mysql',
    operatorsAliases: false
  }
};
