"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "admins",
      [
        {
          name: "Admin 1",
          email: "admin1@domain.com",
          password: "admin1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Admin 2",
          email: "admin2@domain.com",
          password: "admin2",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("admins", null, {});
  }
};
