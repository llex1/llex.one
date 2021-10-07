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
}
module.exports = new Auth();

// console.log(client.topology?.s?.state);
