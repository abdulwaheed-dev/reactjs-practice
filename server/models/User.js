const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({ name: string, password: string, age: number });

const User = mongoose.Model("User", UserSchema);

module.exports = User;
