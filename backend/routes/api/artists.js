const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { User } = require("../../db/models");

router.get("/", asyncHandler(async (req, res, next) => {

  const artists = await User.findAll({ where: { isArtist: true } });
  res.json({artists: artists})
}));

router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const userId = req.params.id;
    const artist = await User.findByPk(userId);
    res.json({ artist: artist });
  })
);


module.exports = router;

