const AuthModel = require("./Auth");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
    const jResult = jwt.sign({id:result.insertedId},process.env.JWT)
    console.log(jResult);
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
