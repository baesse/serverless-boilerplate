const { create } = require('../../../services/users');

module.exports.create = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  create(event, context, callback);
};
