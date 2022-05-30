const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getOneTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findOne({ _id: taskId });

    if (!task) {
      return res.status(404).json({ msg: `No task with ID : ${taskId}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({ msg: `No task with ID : ${taskId}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findOneAndDelete({ _id: taskId });

    if (!task) {
      return res.status(404).json({ msg: `No task with ID : ${taskId}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
  getOneTask,
};
