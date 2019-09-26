const { responseBuilder } = require('../../helpers');
const { connect } = require('../../config/database/mongoose');
const model = require('../../models/user');

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
    const {
      body,
    } = event;

    const user = await createUser(JSON.parse(body));

    callback(
      null,
      responseBuilder({
        statusCode: 200,
        body: {
          user,
        },
      }),
    );
  } catch (error) {
    console.error(error);
    callback(
      null,
      responseBuilder({
        statusCode: error.status || 500,
        body: {
          error: error.message,
        },
      }),
    );
  }
};
