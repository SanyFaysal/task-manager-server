const Auth = require("./auth.model");

exports.signupService = async (data) => {
  const result = await Auth.create(data);

  return result;
};
exports.findUserByEmailService = async (email) => {
  const result = await Auth.findOne({
    $or: [{ email }],
  });
  return result;
};

exports.getAllService = async (role, searchTerm) => {
  const result = await Auth.find();
  return result;
};
