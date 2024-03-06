const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");

const { ObjectId } = mongoose.Schema.Types;

const authSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    profession: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      message: "Please enter a password",
    },
  },
  {
    timeStamps: true,
  }
);

authSchema.pre("save", function (next) {
  const password = this.password;
  const hash = bcrypt.hashSync(password);
  this.password = hash;
  next();
});

authSchema.methods.comparePassword = function (password, hash) {
  const isValidPassword = bcrypt.compareSync(password, hash);
  return isValidPassword;
};
const Auth = mongoose.model("Auth", authSchema);

module.exports = Auth;
