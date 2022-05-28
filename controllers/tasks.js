const getAllTasks = (req, res) => {
  res.send("Get all items");
};

const createTask = (req, res) => {
  res.send("Create new item");
};

const getOneTask = (req, res) => {
  res.send("Get one item");
};

const updateTask = (req, res) => {
  res.send("Update one item");
};

const deleteTask = (req, res) => {
  res.send("Delete one item");
};

module.exports = {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
  getOneTask,
};
