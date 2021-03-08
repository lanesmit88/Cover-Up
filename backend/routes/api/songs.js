const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { User, Album, Song } = require("../../db/models");
const { check } = require("express-validator");

router.post(
  "/create",
  asyncHandler(async (req, res, next) => {
    const { songName, URL, albumId, ogArtist } = req.body;
    const newSong = await Song.create({
      songName,
      URL,
      albumId,
      ogArtist,
    });
    
    const addSong = await Song.findByPk(newSong.id, {
      include: [User, Album],
    });
    res.json({ addSong });
  })
);

module.exports = router;
