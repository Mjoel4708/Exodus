module.exports.validateRegisterInput = (
    username,
    name,
    email,
    latitude

) => {
    const errors = {};
    if(username.trim() === ""){
        errors.username = "Username cannot be empty"
    }
    if(name.trim() === ""){
        errors.name = "Name cannot be empty"
    }
    if(email.trim() === ""){
        errors.email = "Email cannot be empty";

    }else{
        const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!email.match(regEx)){
            errors.email = "Email must be a valid email address";

        }
    }
    
    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
    
} 