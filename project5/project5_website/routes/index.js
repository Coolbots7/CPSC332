var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var connection = mysql.createConnection({
     host: 'localhost',
     user: 'cpsc332webapp',
     password: 'w3bapppa$$w0rd',
     database: 'cpsc332_project4'
});
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {

     selectArtists().then(function(artists) {
          selectArtworks().then(function(artworks) {
               selectArtShows().then(function(artShows) {
                    selectCustomers().then(function(customers) {
                         selectArtTypes().then(function(artTypes) {
                              res.render('index', {
                                   title: 'Express',
                                   artists: artists,
                                   artworks: artworks,
                                   artShows: artShows,
                                   customers: customers,
                                   artTypes: artTypes
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

function selectArtists() {
     return new Promise(function(resolve, reject) {
          connection.query("SELECT * FROM t_Artist;", function(err, rows, fields) {
               if (err) {
                    reject(err);
               }
               resolve(rows);
          });
     });
}

function selectArtworks() {
     return new Promise(function(resolve, reject) {
          connection.query("SELECT * FROM t_Artwork;", function(err, rows, fields) {
               if (err) {
                    reject(err);
               }
               resolve(rows);
          });
     });
}

function selectArtShows() {
     return new Promise(function(resolve, reject) {
          connection.query("SELECT * FROM t_ArtShow;", function(err, rows, fields) {
               if (err) {
                    reject(err);
               }
               resolve(rows);
          });
     });
}

function selectCustomers() {
     return new Promise(function(resolve, reject) {
          connection.query("SELECT * FROM t_Customer;", function(err, rows, fields) {
               if (err) {
                    reject(err);
               }
               resolve(rows);
          });
     });
}

function selectArtTypes() {
     return new Promise(function(resolve, reject) {
          connection.query("SELECT * FROM t_ArtType;", function(err, rows, fields) {
               if (err) {
                    reject(err);
               }
               resolve(rows);
          });
     });
}

function selectArtStyles() {
     return new Promise(function(resolve, reject) {
          connection.query("SELECT * FROM t_ArtStyle;", function(err, rows, fields) {
               if (err) {
                    reject(err);
               }
               resolve(rows);
          });
     });
}

module.exports = router;
