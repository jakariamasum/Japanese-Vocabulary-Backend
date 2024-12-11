const AppError = require("../../errors/AppError");
const catchAsync = require("../../utils/catchAsync");
const sendResponse = require("../../utils/sendResponse");
const {
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserRoleIntoDB,
} = require("./user.service");

const getAllUsers = catchAsync(async (req, res) => {
  const result = await getAllUsersFromDB();
  if (!result) {
    throw new AppError(404, "No users found");
  }
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Users retrived successfully!",
    data: result,
  });
});
const getSingleUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getSingleUserFromDB(id);
  if (!result) {
    throw new AppError(404, "No users found");
  }
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "User retrived successfully!",
    data: result,
  });
});
const updateUserRole = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await updateUserRoleIntoDB(id, req.body);
  if (!result) {
    throw new AppError(404, "No users found");
  }
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "User updated successfully!",
    data: result,
  });
});

module.exports = {
  getAllUsers,
  getSingleUser,
  updateUserRole,
};
