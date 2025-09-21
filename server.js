require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const connectDB = require("./_config");

// Define routes
let index = require("./routes/index");
let image = require("./routes/image");

// Initializing the app
const app = express();

// View Engine
app.set("view engine", "ejs");

// Set up the public folder;
app.use(express.static(path.join(__dirname, "public")));

// body parser middleware
app.use(express.json());

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Use routes
    app.use("/", index);
    app.use("/image", image);

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(" Failed to start server:", error);
    process.exit(1);
  }
})();
