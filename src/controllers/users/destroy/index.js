const { destroy } = require('../../../services/users');

module.exports.destroy = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  destroy(event, context, callback);
};
