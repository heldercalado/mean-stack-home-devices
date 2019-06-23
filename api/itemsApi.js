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
router.get('/liststates', function(req,res){
  db.States.find()
  .sort({name: 1})
  .then(data =>{
    console.log(data.length);
    res.json(data);
  })

});
router.get('/listcities/:state?', function(req,res){
  query = req.params.state ? {state:req.params.state} : null
  console.log(query);
  db.Cities.find(query)
  .sort({name: 1})
  .then(data =>{
    console.log(data.length);
    res.json(data);
  })

});
router.get('/userinfo/:userid', function(req,res){
  
  db.Users.findById(req.params.userid)
  .sort({name: 1})
  .then(data =>{
    console.log(data.length);
    res.json(data);
  })

});







module.exports = router;
