require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const connectDB = require("./_config");

// Define routes
let index = require("./routes/index");
let image = require("./routes/image");

// Connect to MongoDB
connectDB();

// Initializing the app
const app = express();

// View Engine
app.set("view engine", "ejs");

// Set up the public folder;
app.use(express.static(path.join(__dirname, "public")));

// body parser middleware
app.use(express.json());

app.use("/", index);
app.use("/image", image);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
