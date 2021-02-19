const UserHelper = require("./helper");

class UserRouter {
  updateUser = async (req, res) => {
    try {
      const updateUser = req.body.update;
      const userId = req.params.Id;
      const userById = await UserHelper.updateUser(userId, updateUser);
      res.status(200).json(userById);
    } catch (error) {
      res.status(400).json(error);
    }
  };
  deleteUser = async (req, res) => {
    try {
      const userId = req.params.Id;
      const removeUser = await UserHelper.deleteUser(userId);
      res.status(200).json(removeUser);
    } catch (error) {
      res.status(200).json(error);
    }
  };
}

module.exports = new UserRouter();
