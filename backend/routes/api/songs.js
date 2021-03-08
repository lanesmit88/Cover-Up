const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { User, Album, Song } = require("../../db/models");
const { check } = require("express-validator");

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

module.exports = router;
