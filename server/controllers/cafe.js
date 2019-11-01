const models = require('../models/cafe');

module.exports = {
  cafe: {
    get: async (req, res) => {
      const result = await models.cafe.get();
      res.send(result);
    }
  }
};
