class AuthController {
  register(req, res, next) {
    res.status('200').send()
    next();
  }
  login(req, res, next) {
    next();
  }
  logout(req, res, next) {
    next();
  }
  info(req, res, next){
    next();
  }
}

module.exports = new AuthController();
