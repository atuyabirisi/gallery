const { MongoClient } = require("mongodb");

async function connectDB() {
  let uri;

  switch (process.env.NODE_ENV) {
    case "test":
      uri = process.env.DB_URL_TEST;
      break;
    case "development":
      uri = process.env.DB_URL_DEV;
      break;
    case "production":
      uri = process.env.DB_URL_PROD;
      break;
    default:
      uri = process.env.DB_URL_DEV;
  }

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();

    await client.db("darkroom").command({ ping: 1 });
    console.log("connected to MongoDB!");
  } catch (error) {
    console.error(error);
  }
}

module.exports = connectDB;
