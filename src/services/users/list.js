const { responseBuilder } = require('../../helpers');
const { connect } = require('../../config/database/mongoose');
const model = require('../../models/user');

const getUsers = async () => {
  try {
    await connect();

    return model.aggregate().project({ __v: false });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports.list = async (event, context, callback) => {
  try {
    const users = await getUsers();

    if (users.length === 0) {
      return callback(
        null,
        responseBuilder({ statusCode: 204 }),
      );
    }

    return callback(
      null,
      responseBuilder({
        statusCode: 200,
        body: { data: users },
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
