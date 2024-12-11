const catchAsync = require("../../utils/catchAsync");
const sendResponse = require("../../utils/sendResponse");
const { registerUserIntoDB, loginUserIntoDB } = require("./auth.service");

const registerUser = catchAsync(async (req, res) => {
  try {
    const { name, email, password, photoUrl } = req.body;
    const result = await registerUserIntoDB({
      name,
      email,
      password,
      photoUrl,
    });
    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: "Registration completed",
    });
  } catch (error) {
    sendResponse(res, {
      success: false,
      statusCode: error.status || 500,
      message: error.message,
    });
  }
});

const loginUser = catchAsync(async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await loginUserIntoDB({ email, password });
    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: "User login sucessfully",
      data: result,
    });
  } catch (error) {
    sendResponse(res, {
      success: false,
      statusCode: error.status || 500,
      message: error.message,
    });
  }
});

module.exports = {
  registerUser,
  loginUser,
};
