const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { User, Album, Song } = require("../../db/models");
const { check } = require("express-validator");

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const artists = await User.findAll({
      where: { isArtist: true },
      include: Album,
    });
    res.json({ artists: artists });
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const userId = req.params.id;
    const artist = await User.findByPk(userId);
    const albums = await Album.findAll({
      where: {
        artistId: userId,
      },
      include: [User, Song],
    });
    res.json({ albums });
  })
);

router.get(
  "/:id/:albumId",
  asyncHandler(async (req, res, next) => {
    const albumId = req.params.albumId;
    const album = await Album.findOne({
      where: {
        id: albumId,
      },
      include: Song,
    });

    res.json({album});
  })
);

router.post(
  "/:artistId/:albumId/create",
  asyncHandler(async (req, res, next) => {
    const { name, dataUrl, albumId, ogArtist } = req.body;
    const newSong = await Song.create({
      name,
      dataUrl,
      albumId,
      ogArtist,
    });

    const addSong = await Song.findByPk(newSong.id);
    res.json({ addSong });
  })
);

router.delete(
  "/:artistId/:albumId/:songId/delete",
  asyncHandler(async (req, res, next) => {
    songId = req.params.songId;

    const removeSong = await Song.findOne({ where: { id: songId } });

    await removeSong.destroy();
    let deleteSong = { songId };
    res.json({ deleteSong });
  })
);

module.exports = router;
