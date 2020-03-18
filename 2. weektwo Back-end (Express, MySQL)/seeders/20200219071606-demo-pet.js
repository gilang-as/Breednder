"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "pets",
      [
        {
          name: "Deno",
          gender: "Male",
          species: 1,
          age: "Adult",
          user: 1,
          about_pet: "Sulcata Albino",
          photo1: "image.jpg",
          photo2: null,
          photo3: null,
          photo4: null,
          photo5: null,
          photo6: null,
          photo7: null,
          photo8: null,
          photo9: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Mila",
          gender: "Female",
          species: 2,
          age: "Teenager",
          user: 1,
          about_pet: "Sulcata Terbaik",
          photo1: "image.jpg",
          photo2: null,
          photo3: null,
          photo4: null,
          photo5: null,
          photo6: null,
          photo7: null,
          photo8: null,
          photo9: null,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("pets", null, {});
  }
};
