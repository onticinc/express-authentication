'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gameName: {
        type: Sequelize.STRING
      },
      gameModule: {
        type: Sequelize.STRING
      },
      gameManufacture: {
        type: Sequelize.STRING
      },
      gameSerialNumber: {
        type: Sequelize.STRING
      },
      gameNotes: {
        type: Sequelize.TEXT
      },
      gamePicture: {
        type: Sequelize.STRING
      },
      gameHighScore: {
        type: Sequelize.INTEGER
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('games');
  }
};