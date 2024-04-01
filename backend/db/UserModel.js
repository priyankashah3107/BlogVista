// const { model } = require("mongoose");
// const userSchema  = require("./Users.js");

// const UserModel = model("User", userSchema)

// module.exports = UserModel

import { model } from "mongoose";
import userSchema from "./Users.js";

const UserModel = model("User", userSchema);

export default UserModel;
