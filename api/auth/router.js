const Auth = require("./helper");
const usersdb = require("./usersdb");
const AuthHelper = Auth.AuthHelper;
const AuthHelper1 = new AuthHelper();
const Userdb = require("./usersdb");

class AuthRouter {
  register = (req, res) => {
    const userDetails = {
      email: req.body.email,
      password: req.body.password,
    };
    const { user , error } = usersdb.updateUser(userDetails);
    console.log([user, error]);
    const { data, errors } = AuthHelper1.register({ userDetails: user });
    if (error) {
      return res.status(400).json(error);
    }
    return res.status(200).json(data);
  };

  login = (req, res) => {
    const user = {
      email: req.body.email,
      password: req.body.password,
    };
    const { userResponse, error } = AuthHelper1.login(user);
    if (error) {
      res.status(400).json(error);
    } else {
      res.status(200).json(userResponse);
    }
  };
}

module.exports = new AuthRouter();
