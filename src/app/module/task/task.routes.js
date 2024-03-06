const { verifyToken } = require("../../middleware/verifyToken");
const {
  createTask,
  getAll,
  updateTask,
  deleteTask,
} = require("./task.controller");

const express = require("express");

const router = express.Router();

router.post("/", createTask);
router.patch("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

router.get("/all", verifyToken, getAll);
module.exports = router;
