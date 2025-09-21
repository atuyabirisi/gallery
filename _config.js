const mongoose = require("mongoose");

const connectToDB = async () => {
  let uri;

  switch (process.env.NODE_ENV) {
    case "test":
      uri = process.env.DB_URL_TEST;
      break;
    case "production":
      uri = process.env.DB_URL_PROD;
      break;
    case "development":
      uri = process.env.DB_URL_DEV;
      break;
    default:
      uri = process.env.DB_URL_DEV;
  }

  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectToDB;
