const AuthModel = require("./Auth");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const Validation = require("../helpers/validation");

class AuthController {
  //register------------------------------------
  async register(req, res, next) {
    if (await AuthModel.isExistEmail(req)) {
      return res
        .status("400")
        .send({ ok: false, message: "This is email not unique." });
    }
    req.body.pass = await bcrypt.hash(req.body.pass, 8)
    const result =  await AuthModel.register(req)
    const token = jwt.sign({id:result.insertedId},process.env.JWT)
    res.status('200').send({ok: true, token:token})
    next();
  }
  //login--------------------------------------
  async login(req, res, next) {
    const isExistEmail = await AuthModel.isExistEmail(req)
    if(!isExistEmail){
      return res.status('400').send({ok:false, message: 'Check Email or password'})
    }
    if(isExistEmail){
      const token = jwt.sign({id:isExistEmail._id},process.env.JWT);
      await bcrypt.compare(req.body.pass, isExistEmail.pass)
        ? res.status('200').send({ok: true, token:token})
        : res.status('400').send({ok:false, message: 'Check Email or password'})
    }
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
