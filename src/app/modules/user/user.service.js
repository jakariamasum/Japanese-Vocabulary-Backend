const { User } = require("./user.model");

const getAllUsersFromDB = async () => {
  const result = await User.find().select("-password");
  return result;
};
const getSingleUserFromDB = async (id) => {
  const result = await User.findOne({ _id: id }).select("-password");
  return result;
};

const updateUserRoleIntoDB = async (id, payload) => {
  console.log(payload);
  const result = await User.findByIdAndUpdate(
    { _id: id },
    { role: payload.role },
    {
      new: true,
    }
  );
  return result;
};

module.exports = {
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserRoleIntoDB,
};
