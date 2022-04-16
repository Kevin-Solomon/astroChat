const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String },
  },
  { timestamps: true }
);
const UserModel = mongoose.model('USer', UserSchema);
module.exports = UserModel;
