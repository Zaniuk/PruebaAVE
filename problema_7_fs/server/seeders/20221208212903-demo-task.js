'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tasks', [
      {
        title: 'Task 1',
        description: 'Description 1',
        date: new Date(),
        priority: 3,
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Task 2',
        description: 'Description 2',
        date: new Date(),
        priority: 2,
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Task 3',
        description: 'Description 3',
        date: new Date(),
        priority: 1,
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
