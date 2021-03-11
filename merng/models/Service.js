const { model, Schema } = require("mongoose");

const serviceSchema = new Schema({
    username: String,
    email: String,
    location: String,
    title: String,
    description: String,
    createdAt: String,
    requests: [
        {
          description: String,
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