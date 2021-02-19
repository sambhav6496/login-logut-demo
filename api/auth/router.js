const AuthHelper = require("./hekper");

class AuthRouter {
  register = async (req, res) => {
    try {
      const userDetails = {
        email: req.body.email,
        password: req.body.password,
      };
      const user = await AuthHelper.register(userDetails);
      return res.status(200).json(user);
    } catch (error) {
      res.status(400).json(error);
    }
  };

  login = async (req, res) => {
    try {
      const userDetails = {
        email: req.body.email,
        password: req.body.password,
      };
      const user = await AuthHelper.login(userDetails);
      return res.status(200).json(user);
    } catch (error) {
      res.status(400).json(error);
    }
  };
}

module.exports = new AuthRouter();
