const Auth = require("./helper");
const AuthHelper = Auth.AuthHelper;
const AuthHelper1 = new AuthHelper();
class AuthRouter {
  register = (req, res) => {
    const user = {
      email: req.body.email,
      password: req.body.password,
    };
    const { data, error } = AuthHelper1.register({ userDetails: user });
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
