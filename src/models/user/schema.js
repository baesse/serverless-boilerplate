const { Schema } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
}, { timestamps: true, collection: 'users' });

userSchema.methods.toJSON = function toJSON() {
  const obj = this.toObject();
  delete obj.__v;

  return obj;
};

module.exports = userSchema;
