const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const PORT = 3000;

// body parser
// for parsing application/json
app.use(express.json());

// for cross origin resource sharing
app.use(cors());

// routes
app.use("/api/user", (req, res, next) => {
  res.send("Welcome to user route");
});

app.use("/api/todo", (req, res, next) => {
  res.send("Welcome to todo route");
});

// database connection
mongoose
  .connect("mongodb://localhost:27017/express-mongo")
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Database connection failed", err);
  });

// server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
