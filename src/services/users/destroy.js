const mongoose = require('mongoose');

const { responseBuilder } = require('../../helpers');
const { connect } = require('../../config/database/mongoose');
const userSchema = require('../../models/user/schema');

const model = mongoose.model('User', userSchema);

const deleteUserById = async (id) => {
  try {
    await connect();
    return model.findByIdAndDelete(id);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports.destroy = async (event, context, callback) => {
  try {
    const { pathParameters } = event;

    await deleteUserById(pathParameters.id);
    callback(
      null,
      responseBuilder({
        statusCode: 204,
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
