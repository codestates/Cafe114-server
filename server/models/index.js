const models = require('../../database/models');

module.exports = {
  index: {
    get: () => {
      return models.cafes.findAll();
    }
  }
};
