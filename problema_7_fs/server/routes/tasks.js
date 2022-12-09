const express = require("express");
const { createTask, getTasks, updateTask, deleteTask, getTask } = require("../controllers/tasks");
const router = express.Router();

/* GET users listing. */
router.get("/", getTasks);
router.get("/:id", getTask);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);


module.exports = router;
