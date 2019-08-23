module.exports = function(sequelize, DataTypes) {
    // Define the Customer Sequelize model
    var Customer = sequelize.define("Customer", 
      {
        // The name identifying the customer
        name: {
          type: DataTypes.STRING,
          allowNull: false
        }
      });
  
      Customer.associate = function (models) {
        Customer.belongsTo(models.Burger);
    };

    /*
    Customer.associate = function (models) {
      Customer.hasMany(models.CustomerLocation, { foreignKey: 'customer_id' });
      Customer.hasMany(models.CustomerContact, { foreignKey: 'customer_id' });
      Customer.hasMany(models.Prebook, { foreignKey: 'customer_id' });
      Customer.hasMany(models.PrebookLineItem, { foreignKey: "customer_id" });
      Customer.hasMany(models.Order, { foreignKey: 'customer_id' });
    } */

    return Customer;
  };