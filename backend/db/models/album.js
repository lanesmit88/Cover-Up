"use strict";
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define(
    "Album",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      coverUrl: { type: DataTypes.STRING },
      released: { type: DataTypes.DATE },
      comments: { type: DataTypes.TEXT },
      originalArtist: { type: DataTypes.STRING },
      artistId: { type: DataTypes.INTEGER },
    },
    {}
  );
  Album.associate = function (models) {
    // associations can be defined here
    Album.hasMany(models.Song, { foreignKey: "albumId" });
    Album.belongsTo(models.User, { foreignKey: "artistId" });
  };
  return Album;
};
