module.exports = function(sequelize, DataTypes) {
    // Define the Burger Sequelize model
    var Burger = sequelize.define("Burger", 
      {
        // The name identifying the burger
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        // The availability boolean
        devoured: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        }
        
      });

      Burger.associate = function (models) {
        Burger.belongsTo(models.Customer);
     };
  
    return Burger;
  };