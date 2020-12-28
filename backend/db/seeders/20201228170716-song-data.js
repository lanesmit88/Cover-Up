"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "Songs",
      [
        {
          name: "rainbow crown",
          length: 2.2,
          dataUrl:
            "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
          originalArtist: "Silly Tony",
          albumId: 1,
        },
        {
          name: "turtle crumbs",
          length: 3.15,
          dataUrl:
            "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3",
          originalArtist: "Gramham Thompson",
          albumId: 1,
        },
        {
          name: "sad crumpet",
          length: 1.17,
          dataUrl:
            "http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",
          originalArtist: "Vince Bradberry",
          albumId: 2,
        },
        {
          name: "turn the beat all the way down",
          length: 0.5,
          dataUrl:
            "http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg",
          albumId: 2,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Songs", null, {});
  },
};
