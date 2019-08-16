var mysql = require('mysql');
var Sequelize = require("sequelize");
var connection;
require('dotenv').config();
var newLine = '\n\n';


// heroku database
connection = mysql.createConnection(process.env.JAWSDB_URL);


var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
    host: selectedSource.host,
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
});

module.exports = connection;