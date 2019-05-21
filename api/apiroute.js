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
router.get("/getnames", function (req, res) {

  db.Items.distinct("SubCategory")
  .then(data => {
    if (data) {
      res.json(data);
    }
  });

});
router.get("/listitems/:subcategory", function (req, res) {
  console.log(req.params);
  if (req.params.subcategory != 'All') {
    query = {
      "SubCategory": req.params.subcategory
    }
  } else {
    query = null;
  }

  db.Items.find(query).sort({
    Date: -1
  }).then(data => {
    if (data) {
      console.log(data.length);
      res.json(data);
    }
  });

});


router.get("/latestitems", function (req, res) {
 let subCategoryArray = []
 let results = [];
  var counter = 0 ;
    db.Items.distinct("SubCategory")
    .then(data => {
      if (data) {
        subCategoryArray= data;
      }
    }).then(results =>{
      subCategoryArray.map(subCategory => {
        getlatestItems(subCategory);
      
      });
    })
  
  
 
 
  function getlatestItems(argsubcategory){
    query = {SubCategory: argsubcategory}
    
    db.Items.find(query)
    .sort({Date: -1})
    .limit(16)
    .then(data => {
      if (data) {
       
        counter += 1;
      
        results = results.concat(data);
        
        if (counter === subCategoryArray.length){
          res.json(results);
        }
      }
    });
  }

});








module.exports = router;
