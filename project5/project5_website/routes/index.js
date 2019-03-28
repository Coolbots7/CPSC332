var express = require('express');
var router = express.Router();
var datalayer = require('./datalayer.js');

/* GET home page. */
router.get('/', function(req, res, next) {

     datalayer.selectArtists().then(function(artists) {
          datalayer.selectArtworks().then(function(artworks) {
               datalayer.selectArtShows().then(function(artShows) {
                    datalayer.selectCustomers().then(function(customers) {
                         datalayer.selectArtTypes().then(function(artTypes) {
                              datalayer.selectArtStyles().then(function(artStyles) {
                                   datalayer.selectLocations().then(function(locations){
                                        res.render('index', {
                                             title: 'Express',
                                             artists: artists,
                                             artworks: artworks,
                                             artShows: artShows,
                                             customers: customers,
                                             artTypes: artTypes,
                                             artStyles: artStyles,
                                             locations: locations
                                        });
                                   }, function (err) {
                                        console.log(err);
                                   })
                              }, function(err) {
                                   console.log(err);
                              });
                         }, function(err) {
                              console.log(err);
                         })
                    }, function(err) {
                         console.log(err);
                    })
               }, function(err) {
                    console.log(err);
               })
          }, function(err) {
               console.log(err);
          })
     }, function(err) {
          console.log(err);
     })


});

module.exports = router;
