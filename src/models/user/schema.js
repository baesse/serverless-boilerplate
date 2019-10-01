const { Schema } = require('mongoose');

const userSchema = new Schema({
  name: { type: String },
  email: { type: String },
}, {
  timestamps: true,
  collection: 'users',
});

userSchema.methods.toJSON = function() {
  const obj = this.toObject();

  delete obj.__v; //eslint-disable-line

  return obj;
};

module.exports = userSchema;
