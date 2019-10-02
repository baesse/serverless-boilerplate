const { get } = require('../../../services/users');

module.exports.get = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  get(event, context, callback);
};
