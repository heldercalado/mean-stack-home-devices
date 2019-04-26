var express = require('express')
var router = express.Router()
//var axios = require("axios");
//var cheerio = require("cheerio");
var db = require("../model");
items =[
    {
      Name: 'Xbox One S 1TB Console - Anthem Bundle',
      Description: 'Bundle includes: a full-game download of Anthem Legion of Dawn Edition, an Xbox Wireless Controller, a 1-Month Xbox Live Gold subscription, and a 1-Month Xbox Game Pass trial (Game requires Xbox Live Gold subscription, sold separately.)',
      Category: 'Consoles',
      price: 249.99,
      Quantity: 100,
      imgUrl: 'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/68-105-259-V08.jpg',

    },
    {
      Name: 'Xbox One S 1TB Console - Tom Clancys The Division 2 Bundle',
      Description: "Bundle includes: * Xbox One S 1TB console, wireless controller, full-game download of Tom Clancy's The Division 2, 1-month Xbox Live Gold subscription, and 1-month Xbox Game Pass trial.",
      Category: 'Consoles',
      price: 249.00,
      Quantity: 100,
      imgUrl: 'https://c1.neweggimages.com/ProductImageCompressAll1280/68-105-258-V01.jpg',
     },
    {
      
      Name: 'Xbox One S 1TB Console - Battlefield V Bundle',
      Description: "Bundle includes: Xbox One S 1TB Console, full-game download of battlefield vtm deluxe Edition, 1-month Xbox game Pass trial with access to over 100+ games and 14-day Xbox live Gold trial",
      Category: 'Consoles',
      price: 300,
      Quantity: 100,
      imgUrl: 'https://c1.neweggimages.com/ProductImageCompressAll1280/68-105-250-V12.jpg',
    },
    {
      
      Name: 'Xbox One X 1TB Console - NBA 2K19 Bundle',
      Description: "Celebrate 20 years of redefining sports gaming with the #1-rated NBA video game simulation series",
      Category: 'Consoles',
      price: 249.99,
      Quantity: 100,
      imgUrl: 'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/74-103-670-V07.jpg',
    },
    {
      
      Name: 'Xbox One S 1TB Console - Minecraft Creators Bundle',
      Description: "Bundle includes: Xbox One S 1TB Console, 1 Xbox Wireless Controller (with 3.5mm headset jack), HDMI cable (4K Capable), AC Power cable, 14-day Xbox Live Gold Trial",
      Category: 'Consoles',
      price: 248.99,
      Quantity: 100,
      imgUrl: 'https://c1.neweggimages.com/ProductImageCompressAll1280/68-105-252-V01.jpg',
    },
    {
      
     
      price: 350.00,
      Name: 'Xbox One X 1TB Console - Fallout 76 Bundle',
      Description: "Bundle includes: Xbox One X console, wireless controller, full-game download of Fallout 76, 1-month Xbox Game Pass trial, and 1-month Xbox Live Gold. Xbox Live Gold required to play game (sold separately, 1 month included).",
      Category: 'Consoles',
      price: 399.99,
      Quantity: 100,
      imgUrl: 'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/68-105-251-S01.jpg',
    }
  ]
router.get("/", function (req, res){

db.Items.find().then(data =>{
    if (data){
        res.json(data);
    }
});

});

router.get("/item/list", function (req, res){

    db.Items.find().then(data =>{
        if (data){
            res.json(data);
        }
    });


});
router.post("/item", function (req, res){
    console.log(req.body.Name);
db.Items.find(
    {name:req.body.Name}
).then(data => {
    console.log(data);
    if (data.length > 0) {
        db.Items.create({
            Name:req.body.Name,
            Description:req.body.Description,
            Category:req.body.Category,
            Price:req.body.name,
            Quantity:req.body.name,
            imgUrl:req.body.imgUrl,
    
        }).then(data =>{
            res.sendStatus(200);
        });
    }else {
        res.json({Message:'Item already in Database'});
    }
})
});
// bulk items add function

function add_bulk_Items(argArrayObjects){
    db.Items.collection.insert(argArrayObjects).then((err,data) => {
        console.log(data);
    });
}
router.get("/item/bulk", function (req,res){
    add_bulk_Items(items);
    res.sendStatus(200);
})



module.exports = router ;