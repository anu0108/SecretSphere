const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String },
  password: { type: String, required: true },
});

const UserModel = mongoose.model("UsersCollection", UserSchema);

module.exports = UserModel;
