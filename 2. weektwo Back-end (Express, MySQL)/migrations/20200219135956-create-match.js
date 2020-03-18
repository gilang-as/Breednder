"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("matches", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pet_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "pets",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      pet_id_liked: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "pets",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("matches");
  }
};
