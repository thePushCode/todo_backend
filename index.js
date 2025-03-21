const express = require("express");
const { db } = require("./config/db");
const cors = require("cors");

const app = express();
const PORT = 3000;

// body parser
// for parsing application/json
app.use(express.json());

// for cross origin resource sharing
app.use(cors());

// routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/todos", require("./routes/todoRoutes"));

// database connection
db();

// server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
