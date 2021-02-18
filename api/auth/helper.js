const { string } = require("joi");
const {
  validateUser,
  convertJoiErrorMessageInToObject,
} = require("../../utils");
class AuthHelper {
  register({ userDetails }) {
    const { error } = validateUser(userDetails);
    if (error) {
      const errors = convertJoiErrorMessageInToObject(error.details);
      return {
        error: errors,
      };
    }
    const user = users.find((u) => u.email === userDetails.email);
    if (user) {
      return {
        error: {
          email: "User already exist",
        },
      };
    }
    users.push(userDetails);
    console.log(users);
    return { data: userDetails };
  }

  login(userDetails) {
    const user = users.find((u) => u.email === userDetails.email);
    if (user && userDetails.password === user.password) {
      return {
        userResponse: userDetails,
      };
    }
    return { error: { message: "Invalid email or password " } };
  }
}

module.exports = {
  AuthHelper,
};
