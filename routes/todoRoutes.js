const express = require("express");
const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/add", auth, createTodo);
router.get("/", auth, getTodos);
router.put("/:id", auth, updateTodo);
router.delete("/:id", auth, deleteTodo);

module.exports = router;
