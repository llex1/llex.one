const AuthModel = require("./Auth");

class AuthController {

  register(req, res, next) {
    console.log('register Conteroller Start');
    AuthModel.register(req).then(data => console.log('result => ', data))

    res.status('200').send()
    next();
  }
  login(req, res, next) {
    

    next();
  }
  logout(req, res, next) {
    next();
  }
  info(req, res, next) {
    // AuthModel.info(req);

    next();
  }
}

module.exports = new AuthController();
