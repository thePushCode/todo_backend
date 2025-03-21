const mongoose = require("mongoose");
const env = require("dotenv");
env.config();

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
  } catch (err) {
    console.log("Database connection failed", err);
  }
};

const checkConnection = () => {
  const state = mongoose.connection.readyState;

  switch (state) {
    case 0:
      console.log("❌ Disconnected");
      break;
    case 1:
      console.log("✅ Connected");
      break;
    case 2:
      console.log("⏳ Connecting...");
      break;
    case 3:
      console.log("⚠️ Disconnecting...");
      break;
    default:
      console.log("Unknown state");
  }
};
module.exports = { db, checkConnection };
