const User = require("../../models/UsersSchema");
class AuthHelper {
  async register(userDetails) {
    const existingUser = await User.findOne({ email: userDetails.email });
    if (existingUser) {
      throw { email: "Email already exist" };
    }
    return User.create(userDetails);
  }

  async login(userDetails) {
    const checkUserByEmail = await User.findOne({ email: userDetails.email });
    if (checkUserByEmail) {
      if (checkUserByEmail.password === userDetails.password) {
        return {
          user: userDetails,
        };
      }
      throw { error: "email or password is invalid" };
    }
    throw { error: "email or password is invalid" };
  }
}

module.exports = new AuthHelper();
