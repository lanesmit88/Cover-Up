"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          username: "Demo-lition",
          hashedPassword: bcrypt.hashSync("password"),
          isArtist: false,
        },
        {
          email: "jim@carry.com",
          username: "jimcarrey",
          hashedPassword: bcrypt.hashSync("123456"),
          isArtist: true,
          location: "Memphis",
          bio: "I like cheese and short walks on the beach.",
          profilePhoto:
            "https://c4v4s5x8.stackpathcdn.com/wp-content/uploads/2013/08/What-women-are-attracted-to.jpg",
          artistName: "grapefruit Jim",
        },
        {
          email: faker.internet.email(),
          username: "FakeUser2",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          isArtist: false,
        },
        {
          email: faker.internet.email(),
          username: "FakeUser3",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          isArtist: false,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        username: { [Op.in]: ["Demo-lition", "jimcarrey", "FakeUser2"] },
      },
      {}
    );
  },
};
