const usersPath = require("../api/auth/helper");
const users = usersPath.users;
const { validateUser, convertJoiErrorMessageInToObject } = require("../utils");

class AuthHelper {
  getUserByEmail({ userDetails }) {
    const user = users.find((u) => u.email === userDetails.email);
    if (user && user.password === userDetails.password) {
      return { findUser: user };
    }
    return { error: "user is invalid" };
  }
  updateUser(user, detailsToBeUpdated) {
    const userToBeUpdated = users.find((u) => u.email === user.email);
    if (userToBeUpdated && userToBeUpdated.password === user.password) {
      const { error } = validateUser(detailsToBeUpdated);
      if (error) {
        const errors = convertJoiErrorMessageInToObject(error.details);
        return {
          error: errors,
        };
      }
      const toUpadteUser = users.find(
        (u) => u.email === detailsToBeUpdated.email
      );
      if (toUpadteUser) {
        return {
          error: "email already exist",
        };
      }
      const indexOfUserTobeupdated = users.indexOf(userToBeUpdated);
      users[indexOfUserTobeupdated].email = detailsToBeUpdated.email;
      users[indexOfUserTobeupdated].password = detailsToBeUpdated.password;
      const updatedUser = {
        email: users[indexOfUserTobeupdated].email,
        password: users[indexOfUserTobeupdated].password,
      };
      return {
        updatedUser: updatedUser,
      };
    }
    return {
      error: "user not found",
    };
  }
  deleteUser(userDetails) {
    const user = users.find((u) => u.email === userDetails.email);
    if (user && user.password === userDetails.password) {
      const indexOfUserToBeDeleted = users.indexOf(user);
      const userDeleted = users.splice(indexOfUserToBeDeleted, 1);
      console.log(users);
      return {
        userDeleted: userDeleted,
      };
    }
    return {
      error: "user not found",
    };
  }
}

module.exports = new AuthHelper();
