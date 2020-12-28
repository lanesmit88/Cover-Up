'use strict';

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
     "Albums",
     [
       {
         name: "Big trinket",
         coverUrl:
           "https://target.scene7.com/is/image/Target/GUEST_f2f3fcc2-5954-4c40-986d-3c1736168946?wid=488&hei=488&fmt=pjpeg",
         released: Sequelize.fn("now"),
         artistId: 2,
       },
       {
         name: "nothing is impossible duh",
         coverUrl:
           "https://miro.medium.com/max/10368/1*o8tTGo3vsocTKnCUyz0wHA.jpeg",
         released: Sequelize.fn("now"),
         artistId: 2,
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
   return queryInterface.bulkDelete("Albums", null, {});
  }
};
