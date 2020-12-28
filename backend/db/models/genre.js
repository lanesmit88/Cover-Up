'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define(
    "Genre",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  Genre.associate = function(models) {
    // associations can be defined here
    Genre.belongsToMany(models.User, {
      through: "ArtistGenre",
      foreignKey: "genreId",
      otherKey: "artistId",
      as: "genresforartists",
    });
  };
  return Genre;
};