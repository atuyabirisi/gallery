const { Schema, model } = require("mongoose");

// create a schema for our database
const imageSchema = new Schema({
  name: String,
  path: String,
  size: Number,
  date: { type: Date, default: Date() },
});

// convert the schema into a Model
const Image = model("Image", imageSchema);

module.exports = Image;
