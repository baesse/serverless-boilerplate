const {
  list,
  get,
  create,
  update,
  destroy,
} = require('../../services/users');

module.exports = {
  list: (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    list(event, context, callback);
  },

  get: (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    get(event, context, callback);
  },

  create: (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    create(event, context, callback);
  },

  update: (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    update(event, context, callback);
  },

  delete: (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    destroy(event, context, callback);
  },
};
