const Todo = require("../models/Todo");

// Create Todo
exports.createTodo = async (req, res) => {
  const { title, description, priority } = req.body;

  try {
    const todo = new Todo({
      user: req.user.id,
      title,
      description,
      priority,
    });

    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

// Get all Todos for the user
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id }).sort({
      createdAt: -1,
    });
    res.json(todos);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

// Update Todo
exports.updateTodo = async (req, res) => {
  const { title, description, completed, priority } = req.body;

  try {
    let todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ msg: "Todo not found" });

    if (todo.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, description, completed, priority },
      { new: true }
    );

    res.json(todo);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

// Delete Todo
exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ msg: "Todo not found" });

    if (todo.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Unauthorized" });
    }
    await todo.deleteOne();
    res.json({ msg: "Todo removed" });
  } catch (error) {
    res.status(500).send("Server error");
  }
};
