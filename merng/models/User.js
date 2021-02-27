const { model, Schema } = require("mongoose");

const userSchema = new Schema({
    username: String,
    name: String,
    email: String,
    location: String,
    createdAt: String
});
module.exports = model("Users", userSchema);