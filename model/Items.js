var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ItemsSchema = new Schema({
    // `name of item is required and of type String
    Name: {
        type: String,
        required: true
    },
    Description: String,
    Category:String,
    Price:Number,
    Quantity:Number,
    imgUrl:String,

});

// This creates our model from the above schema, using mongoose's model method
var Items = mongoose.model("Items", ItemsSchema);

// Export the Items model
module.exports = Items;