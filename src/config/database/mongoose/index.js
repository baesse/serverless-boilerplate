const mongoose = require('mongoose');

module.exports.connect = async () => {
  try {
    const dbUrl = 'localhost:27017/serverless-boilerplate';

    await mongoose.connect(`mongodb://${dbUrl}`, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};
