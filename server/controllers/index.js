const models = require('../models');

module.exports = {
  index: {
    get: async (req, res) => {
      const result = await models.index.get();
      res.send(result);
    }
  }
};
