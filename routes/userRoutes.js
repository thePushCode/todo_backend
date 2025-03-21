const express = require("express");
const {
  register,
  login,
  updatePassword,
} = require("../controllers/userControllor");

const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.put("/update", auth, updatePassword);

module.exports = router;
