const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

async function connect() {
  const client = await MongoClient.connect("mongodb://localhost:27017");
  database = client.db("online-shop");
}

function getDb() {
  if (!database) {
    throw new Error("Could not connect to database");
  }
  return database;
}

module.exports = {
  getDb: getDb,
  connectToDatabase: connect,
};
