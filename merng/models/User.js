const { model, Schema } = require("mongoose");

const userSchema = new Schema({
    username: String,
    name: String,
    email: String,
    location: String,
    dateofBirth: Date,
    createdAt: String
});
module.exports = model("Users", userSchema);