const { model } = require("mongoose");
const userSchema  = require("./Users.js");

const UserModel = model("User", userSchema)

module.exports = UserModel