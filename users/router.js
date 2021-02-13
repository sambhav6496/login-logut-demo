const { users } = require("../api/auth/helper");
const AuthHelper = require("./helper");

class AuthRouter {
  getUserById(req, res) {
    const user = {
      email: req.query.email,
      password: req.query.password,
    };
    const { findUser, error } = AuthHelper.getUserByEmail({
      userDetails: user,
    });
    if (findUser) {
      return res.status(200).json(findUser);
    }
    return res.status(400).json(error);
  }
  updateUser(req, res) {
    const user = {
      email: req.query.email,
      password: req.query.password,
    };
    const detailstobeUpdated = {
      email: req.query.newEmail,
      password: req.query.newPassword,
    };
    const {updatedUser, error }= AuthHelper.updateUser(
      user,
      detailstobeUpdated
    );
    if (error) {
      return res.status(400).json(error);
    }
    return res.status(200).json(updatedUser);
  }
  deleteUser(req , res){
    const user = {
        email: req.query.email,
        password: req.query.password,
      };
      const{userDeleted , error} = AuthHelper.deleteUser(user)
      if(error){
        return  res.status(400).json(error)
      }
      return res.status(200).json(userDeleted)
  }

}

module.exports = new AuthRouter();
