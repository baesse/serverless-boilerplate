const { update } = require('../../../services/users');

module.exports.update = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  update(event, context, callback);
};
