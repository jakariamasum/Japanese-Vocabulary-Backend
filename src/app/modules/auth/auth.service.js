const jwt = require("jsonwebtoken");
const AppError = require("../../errors/AppError");
const { User } = require("../user/user.model");

const registerUserIntoDB = async ({ name, email, password, photoUrl }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new AppError(400, "User already exists");
  }

  const user = new User({ name, email, password, photoUrl });
  const result = await user.save();

  return { message: "Registration completed" };
};

const loginUserIntoDB = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    throw new AppError(401, "Invalid credentials");
  }

  const token = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
};

module.exports = {
  registerUserIntoDB,
  loginUserIntoDB,
};