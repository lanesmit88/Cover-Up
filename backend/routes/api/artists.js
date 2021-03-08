const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { User, Album, Song } = require("../../db/models");
const { check } = require("express-validator");

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const artists = await User.findAll({ where: { isArtist: true } });
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
    });
    res.json({ artist: artist, albums: albums, userId: userId });
  })
);

router.get(
  "/:id/:albumId",
  asyncHandler(async (req, res, next) => {
    const albumId = req.params.albumId;
    const songs = await Song.findAll({
      where: {
        albumId: albumId,
      },
    });
    const album = await Album.findByPk(albumId);
    res.json({ album: album, songs: songs });
  })
);
const songValidator = [
  check("name")
    .isLength({ max: 40 })
    .withMessage("Name must not be more than 40 characters long"),
  check("length")
    .isLength({ max: 10 })
    .withMessage("Song cant be longer than 10 minutes"),
  // .custom((value) => !/\s/.test(value))
  // .withMessage("No spaces are allowed in the list name")
];
router.post(
  "/:id/:albumId",
  songValidator,
  asyncHandler(async (req, res, next) => {
    const {
      name,
      length,
      comments,
      dataUrl,
      originalArtist,
      albumId,
    } = req.body;

    const newSong = Song.build({
      name,
      length,
      comments,
      dataUrl,
      originalArtist,
      albumId,
    });
    await newSong.save();
    res.redirect(`/artists/:id/${albumId}`);
  })
);

router.post(
  "/create",
  asyncHandler(async (req, res, next) => {
    const { name, dataUrl, albumId, ogArtist } = req.body;
    const newSong = await Song.create({
      name,
      dataUrl,
      albumId,
      ogArtist,
    });

    const addSong = await Song.findByPk(newSong.id, {
      include: Album,
    });
    res.json({ addSong });
  })
);

router.delete("/:id/:albumId/:songId"),
  asyncHandler(async (req, res, next) => {
    const { songId } = req.body;
    const song = await Song.findOne({
      where: {id: songId},
    });

    await song.destroy();
     res.redirect("artists/:id/:albumId");;
  });

module.exports = router;
