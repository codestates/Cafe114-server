const models = require('../../database/models');

module.exports = {
  cafe: {
    get: () => {
      return models.cafe.findAll();
    }
  }
};
