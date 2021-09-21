var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    definition;
    var definition = {
        id: {
            type: Number,
            unique: true
        },
        username: {
            type: String
        },
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        email: {
            type: String
        },
        password: {
            type: String
        },
        phone: {
            type: String
        },
        empId: {
            type: String,
            unique: true
        },
        designation:{
            type: Number
        }
    };

module.exports = {
    definition: definition
};
