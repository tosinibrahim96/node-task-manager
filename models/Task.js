const mongoose = require("mongoose");

const Task = mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name field is required"],
    trim: true,
    maxlength: [20, "Name cannot be more than 20 characters"],
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", Task);
