const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const { UserInputError } = require("apollo-server");

const { validateRegisterInput } = require("../../util/Validators");
const{ SECRET_KEY } = require("../../config");
module.exports = {
    Mutation: {
        async register(
            _,
            { 
                registerInput: { username, name, location, email }
            },
            context,
            info){
            //validate user data
            const { valid, errors } = validateRegisterInput(username, name, email, location);
            if(!valid){
                throw new UserInputError("Error", { errors }); 
            }
            //Make sure user does not
            const user = await User.findOne({ username });
            if (user) {
                throw new UserInputError("Username is taken", {
                    errors: {
                        username: "This username is taken"
                    }
                })
            }
            const newuser = new User({
                username,
                name,
                location,
                email,
                createdAt: new Date().toISOString()
            });
            const res = await newuser.save();
            const token = jwt.sign(
                {
                    id: res.id,
                    username: res.username,
                    name: res.name
                },
                SECRET_KEY,
                { expiresIn: "1h" }
            )
            return {
                ...res._doc,
                id: res._id,
                token
                
            }
        }
    }
}