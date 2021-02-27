const Service = require("../../models/Service");

module.exports = {
    Query: {
        async getServices () {
            try {
                const services = await Service.find();
                return services;
            } catch (error) {
                console.log(error)
            }
        }
    }
    
    
}