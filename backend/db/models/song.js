"use strict";
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define(
    "Song",
    {
      name: { type: DataTypes.STRING, allowNull: false },
      length: { type: DataTypes.INTEGER, allowNull: true },
      comments: { type: DataTypes.TEXT, allowNull: true },
      dataUrl: { type: DataTypes.STRING, allowNull: false },
      originalArtist: { type: DataTypes.STRING },
      albumId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  Song.associate = function (models) {
    // associations can be defined here
    Song.belongsTo(models.Album, { foreignKey: "albumId" });
  };
  return Song;
};
