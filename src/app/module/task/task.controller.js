const { generateToken } = require("../../utils/token");
const {
  findUserByEmailService,
  signupService,
  getAllService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
} = require("./task.service");

exports.createTask = async (req, res) => {
  try {
    const data = req.body;
    const result = await createTaskService(data);
    console.log({ data });
    res.status(200).json({
      status: "Success",
      message: "successful",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
};
exports.updateTask = async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;
    const result = await updateTaskService(id, data);
    console.log({ data });
    res.status(200).json({
      status: "Success",
      message: "successful",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
};
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteTaskService(id);

    res.status(200).json({
      status: "Success",
      message: "successful",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
};

exports.getMe = async (req, res) => {
  try {
    const { email } = req.user;
    const result = await findUserByEmailService(email);
    if (!result) {
      return res.status(400).json({
        status: "failed",
        error: "Token is not verified",
      });
    }

    return res.status(200).json({
      status: "Success",
      message: "successfully get data",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
};
exports.getAll = async (req, res) => {
  try {
    const { _id } = req.user;

    const result = await getAllService(_id);
    return res.status(200).json({
      status: "Success",
      message: "Successfully get all ",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
};
