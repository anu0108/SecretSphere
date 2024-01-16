const mongoose = require("mongoose");

const SecretSchema = new mongoose.Schema({
  message: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const SecretModel = mongoose.model("SecretsCollection", SecretSchema);

module.exports = SecretModel;
