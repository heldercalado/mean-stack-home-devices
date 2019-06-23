var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var StateSchema = new Schema({
    // `name of State is required and of type String
    name:String,
    abbreviation: String,

});

// This creates our model from the above schema, using mongoose's model method
var State = mongoose.model("State", StateSchema,"States");

// Export the Items model
module.exports = State;