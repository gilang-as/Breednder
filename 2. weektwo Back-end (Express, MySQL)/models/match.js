"use strict";
module.exports = (sequelize, DataTypes) => {
  const match = sequelize.define(
    "match",
    {
      pet_id: DataTypes.INTEGER,
      pet_id_liked: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN
    },
    {}
  );
  match.associate = function(models) {
    match.belongsTo(models.pet, {
      foreignKey: "pet_id",
      as: "pet"
    });
    match.belongsTo(models.pet, {
      foreignKey: "pet_id_liked",
      as: "pet_liked"
    });
  };
  return match;
};
