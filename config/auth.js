const db = require('../model');
const jwt = require('jsonwebtoken');

module.exports = {
  logUserIn: function (email, password) {
     
    return new Promise((resolve, reject) => {
      db.Users.findOne({
        Email: email
      }).then(user => {
         
          user.verifyPassword(password, (err, isMatch) => {
            
          if (isMatch && !err) {
            let token = jwt.sign({ Id: user._id, Email: user.Email }, process.env.SERVER_SECRET, { expiresIn: 129600 }); // Sigining the token
            resolve({ success: true, message: "Token Issued!", token: token, user: user });
          } else {
            reject({ success: false, message: "Authentication failed. Wrong password." });
          }
        });
      }).catch(err => reject({ success: false, message: "User not found", error: err }));
    })
  }
}