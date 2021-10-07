const AuthModel = require("./Auth");

class AuthController {

  //register------------------------------------
  async register(req, res, next) {
    console.log('register Conteroller Start');

    const result = await AuthModel.register(req);
    console.log(result);
    


    res.status('200').send(result )
    next();
  }
  //login--------------------------------------
  login(req, res, next) {
    
    
    next();
  }
  //logout-------------------------------------
  logout(req, res, next) {
    next();
  }
  //info---------------------------------------
  info(req, res, next) {
    // AuthModel.info(req);

    next();
  }
}

module.exports = new AuthController();
