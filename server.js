require("dotenv").config();
const express = require("express");
const path = require("path");
const connectDB = require("./_config");

const index = require("./routes/index");
const image = require("./routes/image");

const app = express();

// View Engine
app.set("view engine", "ejs");

// Set up the public folder
app.use(express.static(path.join(__dirname, "public")));

// body parser middleware
app.use(express.json());

// Routes
app.use("/", index);
app.use("/image", image);

const PORT = process.env.PORT || 5000;

// Only start the server if this file is run directly
if (require.main === module) {
  (async () => {
    try {
      await connectDB();
      app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
      });
    } catch (error) {
      console.error("Failed to start server:", error);
      process.exit(1);
    }
  })();
}

module.exports = app;
