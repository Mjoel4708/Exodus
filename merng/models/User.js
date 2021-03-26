const { model, Schema } = require("mongoose");

const userSchema = new Schema({
    username: String,
    name: String,
    latitude: parseFloat(String),
    longitude: parseFloat(String),
    email: String,
    createdAt: String
});
module.exports = model("User", userSchema);