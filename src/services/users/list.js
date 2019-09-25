const mongoose = require('mongoose');

const { responseBuilder } = require('../../helpers');
const { connect } = require('../../config/database/mongoose');
const userSchema = require('../../models/user/schema');

const model = mongoose.model('User', userSchema);

const getUsers = async () => {
  try {
    await connect();
    return model.aggregate().project({
      __v: false,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports.list = async (event, context, callback) => {
  try {
    const users = await getUsers();

    if (users.length === 0) {
      callback(
        null,
        responseBuilder({
          statusCode: 204,
        }),
      );
    }

    callback(
      null,
      responseBuilder({
        statusCode: 200,
        body: { data: users },
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
