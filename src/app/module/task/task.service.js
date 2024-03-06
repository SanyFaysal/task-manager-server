const Task = require("./task.model");
const Auth = require("./task.model");

exports.createTaskService = async (data) => {
  const result = await Task.create(data);
  return result;
};
exports.updateTaskService = async (id, data) => {
  const result = await Task.updateOne({ _id: id }, data);
  return result;
};
exports.deleteTaskService = async (id) => {
  const result = await Task.deleteOne({ _id: id });
  return result;
};
exports.findUserByEmailService = async (email) => {
  const result = await Auth.findOne({
    $or: [{ email }],
  });
  return result;
};

exports.getAllService = async (id) => {
  console.log({ id });
  const result = await Task.find({ owner: id }).populate("owner");
  return result;
};
