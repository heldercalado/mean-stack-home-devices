var express = require('express')
var router = express.Router()
//var axios = require("axios");
//var cheerio = require("cheerio");
var db = require("../model");

router.get("/", function (req, res) {

  db.Items.find().sort({
    Date: -1
  }).then(data => {
    if (data) {
      res.json(data);
    }
  });

});
router.get("/listitems/:subcategory", function (req, res) {
  console.log(req.params);
query = {"SubCategory":req.params.subcategory}
  db.Items.find(query).sort({
    Date: -1
  }).then(data => {
    if (data) {
      console.log(data.length);
      res.json(data);
    }
  });

});





module.exports = router;
