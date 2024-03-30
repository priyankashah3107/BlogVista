const { model } = require("mongoose");
const userSchema  = require("./Users.js");

const UserModel = model("User", userSchema)

export default UserModel;