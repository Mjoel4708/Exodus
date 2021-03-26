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
                registerInput: { username, name, latitude, longitude, email }
            },
            context,
            info){
            //validate user data
            const { valid, errors } = validateRegisterInput(username, name, email, latitude);
            if(!valid){
                throw new UserInputError("Error", { errors }); 
            }
            //Make sure user does not
            const user1 = await User.findOne({ username });
            if (user1) {
                

                throw new UserInputError("Username is taken", {
                    errors: {
                        username: "This username is taken"
                    }
                })
            }
            const newUser = new User({
                username,
                name,
                latitude,
                longitude,
                email,
                createdAt: new Date().toISOString()
            });
            
            const user = await newUser.save();

            return user
            /*const res = await newuser.save();
            const token = jwt.sign(
                {
                    id: res.id,
                    username: res.username,
                    name: res.name
                },
                SECRET_KEY,
                { expiresIn: "100d" }
            )
            return {
                ...res._doc,
                id: res._id,
                token
                
            };*/
        }
    },
    Query: {
        async getUser(_, { username }) {
          
            const user = await User.findOne({ username });
      
            if (!user) {
              errors.general = 'User not found';
              throw new UserInputError('User not found', { errors });
            }
      
            return user
          },
    }
    
}