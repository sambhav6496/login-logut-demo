const User = require("../../models/UsersSchema");

class UserHelper {
  async updateUser(userId, userDetails) {
    const userById = await User.findById(userId);
    if (userById) {
      const existingUser = await User.findOne({ email: userDetails.email });
      if (existingUser) {
        throw { email: "Email already exist" };
      }
      const updateKeys = Object.keys(userDetails);
      updateKeys.forEach((keys) => (userById[keys] = userDetails[keys]));
      const updatedUser = await userById.save();
      return {
        user: updatedUser,
      };
    }
    throw { error: "user with given id not found" };
  }

  async deleteUser(userId) {
    const userById = await User.findById(userId);
    if (userById) {
      const removeUser = await User.findByIdAndRemove(userById);
      return {
        user: removeUser,
      };
    }
    throw { error: "user with given id not found" };
  }
}

module.exports = new UserHelper();
