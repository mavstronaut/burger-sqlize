var Sequelize = require("sequelize");

var burger = seqModel.define("BurgerTable", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    
    burger_name: {
      type: Sequelize.STRING,
    },
    devoured: {
      type: Sequelize.BOOLEAN,
      defaultValue : 0
    },
    date: {
      type: Sequelize.DATE,
    },
    
  });
  
  burger.sync();

module.exports = burger;