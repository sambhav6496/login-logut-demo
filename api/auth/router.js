const Auth = require("./helper");
const usersdb = require("./usersdb");
const AuthHelper = Auth.AuthHelper;
const AuthHelper1 = new AuthHelper();
const Userdb = require("./usersdb");

class AuthRouter {
  register = async (req, res) => {
    const userDetails = {
      email: req.body.email,
      password: req.body.password,
    };
    const { user, error } = await usersdb.register(userDetails);
    if (error) {
      res.status(400).json(error);
    }
    if (user) {
      return res.status(200).json(user);
    }
  };

  login = async (req, res) => {
    const user = {
      email: req.body.email,
      password: req.body.password,
    };
    const { userResponse, message } = await usersdb.login(user);
    if (message) {
      res.status(400).json(message);
    } else {
      res.status(200).json(userResponse);
    }
  };
}

module.exports = new AuthRouter();
