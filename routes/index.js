const express = require("express");
const router = express.Router();
const uuid = require("uuid");
let upload = require("./upload");
const Image = require("../models/images");

var db = [];

router.get("/", async (req, res) => {
  try {
    const images = await Image.find();
    res.render("index", { images: images, msg: req.query.msg });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching images");
  }
});

router.post("/upload", (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.redirect(`/?msg=${err}`);
    }

    if (!req.file) {
      return res.redirect("/?msg=Error: No file selected!");
    }

    try {
      const newImage = new Image({
        name: req.file.filename,
        size: req.file.size,
        path: "images/" + req.file.filename,
      });

      await newImage.save();
      res.redirect("/?msg=File uploaded successfully");
    } catch (saveErr) {
      console.error(saveErr);
      res.redirect("/?msg=Error saving file to database");
    }
  });
});

module.exports = router;
