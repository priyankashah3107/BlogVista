// step1: Making a userSchema 
// Step 2: UserModel

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {type: String, require: true, unique: true},
  password: {type: String, require: true, }
})

module.exports = userSchema;

