'use strict';
var mysql = require('mysql');
var connection = mysql.createConnection({
     host: 'cpsc332-db-svc',
     user: 'cpsc332webapp',
     password: 'w3bapppa$$w0rd',
     database: 'cpsc332_project4'
});
connection.connect();


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
          connection.query("SELECT * FROM t_ArtType ORDER BY ArtTypeID ASC;", function(err, rows, fields) {
               if (err) {
                    reject(err);
               }
               resolve(rows);
          });
     });
}

function selectArtStyles() {
     return new Promise(function(resolve, reject) {
          connection.query("SELECT * FROM t_ArtStyle ORDER BY ArtStyleID ASC;", function(err, rows, fields) {
               if (err) {
                    reject(err);
               }
               resolve(rows);
          });
     });
}

function selectLocations() {
     return new Promise(function(resolve, reject) {
          connection.query("SELECT * FROM t_Location ORDER BY LocationID ASC;", function(err, rows, fields) {
               if (err) {
                    reject(err);
               }
               resolve(rows);
          });
     });
}

function selectArtistView(sort, dir) {
     return new Promise(function(resolve, reject) {
          var sql = "SELECT * FROM v_Artist";

          if(sort != undefined) {
               sql += " ORDER BY " + sort + " ";

               sql += (dir == "desc" ? dir : "asc");
          }
          else {
               sql += " ORDER BY ArtistID ASC;";
          }
          connection.query(sql, function(err, rows, fields) {
               if (err) {
                    reject(err);
               }
               resolve(rows);
          });
     });
}

function selectArtworkView(sort, dir) {
     return new Promise(function(resolve, reject) {
          var sql = "SELECT * FROM v_Artwork";

          if(sort != undefined) {
               sql += " ORDER BY " + sort + " ";

               sql += (dir == "desc" ? dir : "asc");
          }
          else {
               sql += " ORDER BY ArtworkID ASC;";
          }
          connection.query(sql, function(err, rows, fields) {
               if (err) {
                    reject(err);
               }
               resolve(rows);
          });
     });
}

function selectArtShowView(sort, dir) {
     return new Promise(function(resolve, reject) {
          var sql = "SELECT * FROM v_ArtShow";

          if(sort != undefined) {
               sql += " ORDER BY " + sort + " ";

               sql += (dir == "desc" ? dir : "asc");
          }
          else {
               sql += " ORDER BY ArtShowID ASC;";
          }
          connection.query(sql, function(err, rows, fields) {
               if (err) {
                    reject(err);
               }
               resolve(rows);
          });
     });
}

function selectCustomerView(sort, dir) {
     return new Promise(function(resolve, reject) {
          var sql = "SELECT * FROM v_Customer";

          if(sort != undefined) {
               sql += " ORDER BY " + sort + " ";

               sql += (dir == "desc" ? dir : "asc");
          }
          else {
               sql += " ORDER BY CustomerID ASC;";
          }
          connection.query(sql, function(err, rows, fields) {
               if (err) {
                    reject(err);
               }
               resolve(rows);
          });
     });
}

module.exports = {
     selectArtists,
     selectArtworks,
     selectArtShows,
     selectCustomers,
     selectArtTypes,
     selectArtStyles,
     selectLocations,
     selectArtistView,
     selectArtworkView,
     selectArtShowView,
     selectCustomerView
};
