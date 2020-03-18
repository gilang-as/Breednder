"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          email: "user1@coba.com",
          password: "user1",
          breeder: "Coba User1",
          phone: "0123456789",
          address: "Alamat Coba1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "user2@coba.com",
          password: "user2",
          breeder: "Coba User2",
          phone: "0123456789",
          address: "Alamat Coba2",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
