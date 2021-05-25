'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Events', [
      {
        title: "C4G Class", 
        location: "Zoom Meeting",     
        startDate: "2021-05-24", 
        startTime: "10:00 AM", 
        endDate: "2021-05-24", 
        endTime: "6:00 PM", 
        timeZone: "EST",
        userId: 1
      },
      {
        title: "Doctor's Appointment",
        location: "Doc's Office",        
        startDate: "2021-05-25",
        startTime: "9:00 AM",
        endDate: "2021-05-25",
        endTime: "10:00 AM",
        timeZone: "EST",
        userId: 1
      }
  ], {})    
},

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
