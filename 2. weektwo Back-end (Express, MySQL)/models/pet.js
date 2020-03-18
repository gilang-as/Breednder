"use strict";
module.exports = (sequelize, DataTypes) => {
  const pet = sequelize.define(
    "pet",
    {
      name: DataTypes.STRING,
      gender: DataTypes.ENUM("Male", "Female"),
      species: DataTypes.INTEGER,
      age: DataTypes.ENUM("Child", "Teenager", "Adult"),
      user: DataTypes.INTEGER,
      about_pet: DataTypes.STRING,
      photo1: DataTypes.STRING,
      photo2: DataTypes.STRING,
      photo3: DataTypes.STRING,
      photo4: DataTypes.STRING,
      photo5: DataTypes.STRING,
      photo6: DataTypes.STRING,
      photo7: DataTypes.STRING,
      photo8: DataTypes.STRING,
      photo9: DataTypes.STRING
    },
    {}
  );
  pet.associate = function(models) {
    pet.belongsTo(models.user, {
      foreignKey: "user",
      as: "breeder"
    });
    pet.belongsTo(models.species, {
      foreignKey: "species",
      as: "category"
    });
  };
  return pet;
};
