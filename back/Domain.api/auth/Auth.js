class Auth {
  constructor() {}



  async login() {

  }
  async register(req){
    return await req.app.locals.db
      .collection('users')
      .insertOne({"name": req.body.name, "soname": req.body.soname})
  }









  async info(reqdb) {
    // let result;
    // try {
    //   result = await req.app.locals.db
    //     .collection("users")
    //     .findOne({ '"name"': "Alex" });
    // } catch (err) {
    //   console.log("[\x1b[31m ERR \x1b[30m] db connection /Auth.info");
    // }
    // console.log(result);
  }
}
module.exports = new Auth();

// console.log(client.topology?.s?.state);
