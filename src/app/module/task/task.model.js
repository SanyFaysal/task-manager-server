const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");

const taskSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    priority: {
      type: String,
      default: "low",
    },
    date: {
      type: String,
    },
    time: {
      type: String,
    },
    status: {
      type: String,
      default: "todo",
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "Auth",
    },
  },
  {
    timeStamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
