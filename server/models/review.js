'use strict';
module.exports = (sequelize, DataTypes) => {
  var Review = sequelize.define('Review', {
    body: DataTypes.STRING
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};