const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passportLoaclMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

userSchema.plugin(passportLoaclMongoose);
module.exports = mongoose.model("User", userSchema);
