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
router.get("/computers", function (req, res) {

  db.Computers.find().sort({
    Date: -1
  }).then(data => {
    if (data) {
      console.log(data.length);
      res.json(data);
    }
  });

});
router.get("/computergames", function (req, res) {

    db.Computers.find().sort({
      Date: -1
    }).then(data => {
      if (data) {
        console.log(data.length);
        res.json(data);
      }
    });
  
  });
  router.get("/playstation", function (req, res) {

    db.Computers.find().sort({
      Date: -1
    }).then(data => {
      if (data) {
        console.log(data.length);
        res.json(data);
      }
    });
  
  });
  router.get("/playstationgames", function (req, res) {
  
      db.Computers.find().sort({
        Date: -1
      }).then(data => {
        if (data) {
          console.log(data.length);
          res.json(data);
        }
      });
    
    });
  
router.get("/xboxconsoles", function (req, res) {

  db.XboxConsoles.find().sort({
    Date: -1
  }).then(data => {
    if (data) {
      console.log(data.length);
      res.json(data);
    }
  });

});
router.get("/xboxgames", function (req, res) {

  db.XboxConsoles.find().sort({
    Date: -1
  }).then(data => {
    if (data) {
      console.log(data.length);
      res.json(data);
    }
  });

});

router.get("/item/list", function (req, res) {

  db.Items.find().then(data => {
    if (data) {
      res.json(data);
    }
  });


});
router.post("/item", function (req, res) {
  console.log(req.body.Name);
  db.Items.find({
    name: req.body.Name
  }).then(data => {
    console.log(data);
    if (data.length > 0) {
      db.Items.create({
        Name: req.body.Name,
        Description: req.body.Description,
        Category: req.body.Category,
        Price: req.body.name,
        Quantity: req.body.name,
        imgUrl: req.body.imgUrl,

      }).then(data => {
        res.sendStatus(200);
      });
    } else {
      res.json({
        Message: 'Item already in Database'
      });
    }
  })
});
// bulk items add function

function add_bulk_Items(argArrayObjects) {
  db.Items.collection.insert(argArrayObjects).then((err, data) => {
    console.log(data);
  });
}
router.get("/item/bulk", function (req, res) {
  add_bulk_Items(items);
  res.sendStatus(200);
})

router.get("/list/:category", function (req, res) {
  console.log(req.params.category);
  db.Items.find({
      "Category": req.params.category
    })
    .then(data => {
      res.json(data);
    });
});



module.exports = router;
