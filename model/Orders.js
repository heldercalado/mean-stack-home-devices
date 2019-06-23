var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var OrderSchema = new Schema({
  // `name of Order is required and of type String
  UserId: String,
  Items: [{
    type: Schema.Types.ObjectId,
    ref: "Item",
    Quantity: Number
  }],
  Total: Number,
  SalesTax: Number,
  Status: String,
});

// This creates our model from the above schema, using mongoose's model method
var Order = mongoose.model("Order", OrderSchema, "Orders");

// Export the Items model
module.exports = Order;
