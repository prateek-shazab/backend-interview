const { UserService } = require('../services');

const userServiceCRUD = new UserService();

const getUserList = async (_, res) => {
  const users = await userServiceCRUD.getUserList();
  return res.send(users);
};

module.exports = {
  getUserList,
};
