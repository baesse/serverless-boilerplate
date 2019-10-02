const { list } = require('../../../services/users');

module.exports.list = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  list(event, context, callback);
};
