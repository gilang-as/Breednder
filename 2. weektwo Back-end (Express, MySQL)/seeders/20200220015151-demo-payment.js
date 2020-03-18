"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "payments",
      [
        {
          no_rek: "0000000000000",
          proof_of_transfer: "bukti.jpg",
          user: 1,
          status: "free",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          no_rek: "0000000000000",
          proof_of_transfer: "bukti.jpg",
          user: 2,
          status: "premium",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("payments", null, {});
  }
};
