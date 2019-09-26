const { responseBuilder } = require('../../helpers');
const { connect } = require('../../config/database/mongoose');
const model = require('../../models/user');

const updateUser = async (id, params) => {
  try {
    await connect();
    return model.findByIdAndUpdate(id, { $set: params }, { new: true });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports.update = async (event, context, callback) => {
  try {
    const {
      pathParameters,
      body,
    } = event;

    const user = await updateUser(pathParameters.id, JSON.parse(body));

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
