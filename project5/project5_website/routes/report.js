var express = require('express');
var router = express.Router();
var router = express.Router();
var datalayer = require('./datalayer.js');

/* GET home page. */
router.get('/artist', function(req, res, next) {
     var sort = req.query.sort == undefined ? "" : req.query.sort;
     var dir = req.query.dir == undefined ? "asc" : req.query.dir;

     var sortColumn = undefined;
     switch (sort) {
          case "id":
               sortColumn = "ArtistID";
               break;
          case "lname":
               sortColumn = "LastName";
               break;
          case "age":
               sortColumn = "Age";
               break;
     }

     datalayer.selectArtistView(sortColumn, dir).then(function(artists) {
          res.render('artist_report', {
               title: 'Express',
               artists: artists,
               sort: sort,
               dir: dir
          });
     }, function(err) {
          console.log(err);
     });
});

router.get('/artwork', function(req, res, next) {
     var sort = req.query.sort == undefined ? "" : req.query.sort;
     var dir = req.query.dir == undefined ? "asc" : req.query.dir;

     var sortColumn = undefined;
     switch (sort) {
          case "id":
               sortColumn = "ArtworkID";
               break;
          case "lname":
               sortColumn = "LastName";
               break;
          case "created":
               sortColumn = "CreatedOn";
               break;
          case "purchased":
               sortColumn = "PurchasedOn";
               break;
          case "price":
               sortColumn = "Price";
               break;
     }

     datalayer.selectArtworkView(sortColumn, dir).then(function(artworks) {
          res.render('artwork_report', {
               title: 'Express',
               artworks: artworks,
               sort: sort,
               dir: dir
          });
     }, function(err) {
          console.log(err);
     });
});

router.get('/artshow', function(req, res, next) {
     var sort = req.query.sort == undefined ? "" : req.query.sort;
     var dir = req.query.dir == undefined ? "asc" : req.query.dir;

     var sortColumn = undefined;
     switch (sort) {
          case "id":
               sortColumn = "ArtShowID";
               break;
          case "lname":
               sortColumn = "LastName";
               break;
          case "date":
               sortColumn = "ShowDate";
               break;
     }

     datalayer.selectArtShowView(sortColumn, dir).then(function(artshows) {
          res.render('artshow_report', {
               title: 'Express',
               artshows: artshows,
               sort: sort,
               dir: dir
          });
     }, function(err) {
          console.log(err);
     });
});

router.get('/customer', function(req, res, next) {
     var sort = req.query.sort == undefined ? "" : req.query.sort;
     var dir = req.query.dir == undefined ? "asc" : req.query.dir;

     var sortColumn = undefined;
     switch (sort) {
          case "id":
               sortColumn = "CustomerID";
               break;
     }

     datalayer.selectCustomerView(sortColumn, dir).then(function(customers) {
          res.render('customer_report', {
               title: 'Express',
               customers: customers,
               sort: sort,
               dir: dir
          });
     }, function(err) {
          console.log(err);
     });
});

module.exports = router;
