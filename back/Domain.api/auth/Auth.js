class Auth {
  collection = process.env.DB1Collection1;

  isExistEmail(req) {
    const db = req.app.locals.db;
    const { email } = req.body;
    return db.collection(this.collection).findOne({ email: email });
  }
  register(req) {
    const db = req.app.locals.db;
    const { email, pass } = req.body;
    return db.collection(this.collection).insertOne({ email: email, pass: pass });
  }

  async info(req) {
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
