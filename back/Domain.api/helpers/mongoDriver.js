const { MongoClient, TopologyDescriptionChangedEvent } = require("mongodb");
const { rawListeners } = require("..");

class mongoController {
  #poolSize = 5;
  #context = null;
  db = null;

  constructor() {
    this.client = new MongoClient(process.env.MONGO, {
      maxPoolSize: this.#poolSize,
    });
  }

  async run(ctx) {
    this.#context = ctx;
    await this.client.connect();
    try {
      this.db = this.client.db(process.env.DB1);
      (await this.db.command({ ping: 1 })).ok === 1
        ? console.log("[\x1b[32m OK \x1b[30m] db connection")
        : console.log("[\x1b[31m ERR \x1b[30m] db connection");
    } catch (err) {
      console.log(err);
    }
    return this.db;
  }


  connect() {
    console.log(this.app);
  }




  watcher(req, res, next) {
    // req.app.locals.db
    console.log(req.app.locals.db.s.client.topology.s.state);

    next();
  }
}

module.exports = new mongoController();

// process.on('SIGINT', (arg)=>{
//   console.log('sigINT ========= <<<<< =======');
//   process.exit()
// })
