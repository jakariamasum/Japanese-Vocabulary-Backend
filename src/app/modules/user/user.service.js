const { User } = require("./user.model");

const getAllUsersFromDB = async () => {
  const result = await User.find().select("-password");
  return result;
};
const getSingleUserFromDB = async (id) => {
  const result = await User.findOne({ _id: id }).select("-password");
  return result;
};

module.exports = {
  getAllUsersFromDB,
  getSingleUserFromDB,
};
