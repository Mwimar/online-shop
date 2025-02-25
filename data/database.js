require("dotenv").config();
const { MongoClient } = require("mongodb");

let database;

async function connect() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not defined in the .env file");
  }

  try {
    const client = new MongoClient(uri);
    await client.connect();
    database = client.db();
    console.log("Connected to MongoDB ");
  } catch (error) {
    console.error("Could not connect to Database:", error.message);
    process.exit(1); // Exit the process if connection fails
  }
}

function getDb() {
  if (!database) {
    throw new Error("Could not connect to database");
  }
  return database;
}

module.exports = { getDb, connectToDatabase: connect };
