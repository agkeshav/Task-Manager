const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getTask,
  editTask,
  createNewTask,
  deleteTask,
} = require("../controllers/tasks");

router.get("/", getAllTasks);
router.post("/", createNewTask);
router.get("/:id", getTask);
router.patch("/:id", editTask);
router.delete("/:id", deleteTask);

module.exports = router;
