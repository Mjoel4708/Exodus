const { model, Schema } = require("mongoose");

const serviceSchema = new Schema({
    title: String,
    username: String,
    location: String,
    createdAt: String,
    request: [
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