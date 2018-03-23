'use strict';
module.exports = (sequelize, DataTypes) => {
  var Business = sequelize.define('Business', {
    name: DataTypes.STRING
  }, {});
  Business.associate = function(models) {
    // associations can be defined here
  };
  return Business;
};