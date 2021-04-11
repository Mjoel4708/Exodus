const { model, Schema } = require("mongoose");

const serviceSchema = new Schema({
    username: String,
    name: String,
    email: String,
    latitude: parseFloat(String),
    longitude: parseFloat(String),
    category: String,
    title: String,
    description: String,
    rates:parseInt(String),
    createdAt: String,
    ready: Boolean,
    requests: [
        {
          description: String,
          latitude: parseFloat(String),
          longitude: parseFloat(String),
          username: String,
          createdAt: String

        }
    ],
    stars: [
        {
            username: String,
            createdAt: String
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }
    
});
module.exports = model("Service", serviceSchema);