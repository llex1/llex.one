const AuthModel = require("./Auth");

class AuthController {
  register(req, res, next) {
    next();
  }
  login(req, res, next) {
    next();
  }
  logout(req, res, next) {
    next();
  }
  info(req, res, next) {
    AuthModel.info();

    next();
  }
}

module.exports = new AuthController();
