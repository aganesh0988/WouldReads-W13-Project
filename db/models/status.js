'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    statusName: DataTypes.STRING
  }, {});
  Status.associate = function(models) {
    Status.hasMany(models.userBook, {foreignKey: 'statusId'})
  };
  return Status;
};
