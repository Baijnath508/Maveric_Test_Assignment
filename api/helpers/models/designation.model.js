var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    definition;
    var definition = {
        id: {
            type: Number,
            unique: true
        },
        minExperienceRequired: {
        type: Number
        },
        responsibility: {
            type: String
        },
        designation: {
            type: String
        }
    };

module.exports = {
    definition: definition
};
