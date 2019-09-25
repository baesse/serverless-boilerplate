const mongoose = require('mongoose');

const { responseBuilder, ApplicationError } = require('../../helpers');
const { connect } = require('../../config/database/mongoose');
const userSchema = require('../../models/user/schema');

const model = mongoose.model('User', userSchema);

const getUserById = async (id) => {
  try {
    await connect();
    return model.findById(id);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports.get = async (event, context, callback) => {
  try {
    const { pathParameters } = event;
    const user = await getUserById(pathParameters.id);

    if (!user) {
      throw new ApplicationError('user-not-found', 404);
    }

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
          errors: [error.message],
        },
      }),
    );
  }
};
