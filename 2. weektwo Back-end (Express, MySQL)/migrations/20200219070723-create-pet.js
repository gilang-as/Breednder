"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("pets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.ENUM("Male", "Female")
      },
      species: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "species",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      age: {
        type: Sequelize.ENUM("Child", "Teenager", "Adult")
      },
      user: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      about_pet: {
        type: Sequelize.STRING
      },
      photo1: {
        type: Sequelize.STRING
      },
      photo2: {
        type: Sequelize.STRING
      },
      photo3: {
        type: Sequelize.STRING
      },
      photo4: {
        type: Sequelize.STRING
      },
      photo5: {
        type: Sequelize.STRING
      },
      photo6: {
        type: Sequelize.STRING
      },
      photo7: {
        type: Sequelize.STRING
      },
      photo8: {
        type: Sequelize.STRING
      },
      photo9: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable("pets");
  }
};
