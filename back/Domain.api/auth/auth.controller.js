const AuthModel = require("./Auth");
const bcrypt = require('bcrypt')

class AuthController {
  //register------------------------------------
  async register(req, res, next) {
    // if (await AuthModel.isExistEmail(req)) {
    //   return res
    //     .status("400")
    //     .send({ ok: false, message: "This is email not unique." });
    // }
    req.body.pass = await bcrypt.hash(req.body.pass, 8)
    const result =  await AuthModel.register(req)
    res.status('200').send(result)




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
