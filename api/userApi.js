const express = require('express')
const router = express.Router()

const db = require("../model");
const auth = require("../config/auth");
router.post("/register", async function (req, res) {
// create a new user variable with the copntents of req.body
const user = new db.Users(req.body);
// awaits for the return of saving the user 
const result = await user.save();
// sends the result back to the front=end
res.send(result);
});

router.post("/login", (req, res) => {
    console.log("login function called");
    console.log(req.body);
    auth
    .logUserIn(req.body.Email, req.body.PassWord)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(400).json(err));
    
});


module.exports = router;