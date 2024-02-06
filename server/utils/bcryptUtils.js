const bccrypt = require("bcrypt");
const hasPassword = (password) => {
  const saltRounds = 10;
  return bccrypt.hashSync(password, saltRounds);
};
const comparePassword = (password, hasPassword) => {
  return bccrypt.compareSync(password, hasPassword);
};

module.exports = { hasPassword, comparePassword };
