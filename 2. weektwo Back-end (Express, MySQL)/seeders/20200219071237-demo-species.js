"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "species",
      [
        {
          name: "Sulcata",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hermann",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("species", null, {});
  }
};
