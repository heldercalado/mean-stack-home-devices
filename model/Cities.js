var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var CitiesSchema = new Schema({
    // `name of Citi is required and of type String
    city:String,
    state: String,

});

// This creates our model from the above schema, using mongoose's model method
var Cities = mongoose.model("Cities", CitiesSchema,"Cities");

// Export the Items model
module.exports = Cities;