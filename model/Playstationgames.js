var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var PlayStationGameSchema = new Schema({
    // `name of item is required and of type String
   
    Brand: String,
    BrandImgUrl : String,
    ImgUrl : String,
    Id : String,
    Link : String,
    Name : String,
    Description : String,
    Features : String,
    Price : Number,
    DateAdded : Date

});

// This creates our model from the above schema, using mongoose's model method
var PlayStationGame = mongoose.model("playstationgame", PlayStationGameSchema);

// Export the PlayStationGame model
module.exports = PlayStationGame;