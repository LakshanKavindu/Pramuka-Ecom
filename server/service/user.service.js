const user = require("../model/user");

const getUser = async (id) => {
  return await user.findById(id);
};

module.exports = {
  getUser,
};
