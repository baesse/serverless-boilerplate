const { responseBuilder } = require('../../helpers');
const { connect } = require('../../config/database/mongoose');
const model = require('../../models/user');
const moment = require('moment');

const createUser = async (params) => {
  try {
    await connect();

    return model.create(params);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports.create = async (event, context, callback) => {
  try {
    const { body } = event;

    const user = await createUser(JSON.parse(body));

    return callback(
      null,
      responseBuilder({
        statusCode: 200,
        body: { user },
      }),
    );
  } catch (error) {
    console.error(error);

    return callback(
      null,
      responseBuilder({
        statusCode: error.status || 500,
        body: { error: error.message },
      }),
    );
  }
};
