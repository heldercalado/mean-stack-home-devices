const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
    // `name of User is required and of type String
    FirstName:{type:String , default:'n/a'},
    LastName: {type:String , default:'n/a'},
    PassWord:{type:String,required:true},
    StreetAdressOne:{type:String , default:'n/a'},
    StreetAdressTwo: {type:String , default:'n/a'},
    State:{type:String , default:'n/a'},
    City:{type:String , default:'n/a'},
    ZipCode:{type:String , default:'n/a'},
    PhoneNumber:{type:String , default:'n/a'},
    Email:{ type : String , unique : true, required : true, dropDups: true },
    Orders: [{
        type: Schema.Types.ObjectId,
        ref: "Order"
    }],
    Reviews: [{ type: Schema.Types.ObjectId,
        ref: "Review"

    }],
    ShoppingCart: { type: Schema.Types.ObjectId,
        ref: "ShoppingCart"

    },
    RegisterDate: {
        type: Date,
        default: Date.now
    },


});

UserSchema.pre('save', function(next) {
    
    if(!this.isModified("PassWord")) {
        return next();
    }
    
    this.PassWord = bcrypt.hashSync(this.PassWord, saltRounds);
    next();
    
});
UserSchema.methods.verifyPassword = function(password, cb) {
    
    bcrypt.compare(password, this.PassWord, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
    });
  };

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema,"Users");

// Export the Items model
module.exports = User;