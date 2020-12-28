'use strict';
module.exports = (sequelize, DataTypes) => {
  const ArtistGenre = sequelize.define(
    "ArtistGenre",
    {
      artistId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      genreId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  ArtistGenre.associate = function(models) {
    // associations can be defined here
  };
  return ArtistGenre;
};