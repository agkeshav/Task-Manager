const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ sucess: false, msg: err });
  }
};

const createNewTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ sucess: false, msg: err });
  }
};

const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ msg: `No Task with id ${req.params.id}` });
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ sucess: false, msg: err });
  }
};

const editTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `No Task with id ${req.params.id}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ sucess: false, msg: err });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ msg: `No Task with id ${req.params.id}` });
    }
    res.status(200).json({ msg: "Task successfully deleted" });
  } catch (err) {
    res.status(500).json({ sucess: false, msg: err });
  }
};

module.exports = { getAllTasks, createNewTask, getTask, editTask, deleteTask };
