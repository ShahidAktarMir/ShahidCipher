const User = require("../models/userModel");
const bccryptUtils = require("../utils/bcryptUtils");
const authenticateUser = async (username, password) => {
  const user = await User.findOne({ username: username });
  if (user && bccryptUtils.comparePassword(password, user.password)) {
    return true;
  }
  return false;
};

module.exports = { authenticateUser };
