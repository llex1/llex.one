const { MongoClient, TopologyDescriptionChangedEvent } = require("mongodb");

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
    if(await this.connect()){
      return this.db;
    }
    if(!await this.connect()){
      //спробувати презапуск
      console.log("\x1b[34m Next connection attempt in 15 s \x1b[30m");
    }
  }

  async connect() {
    try {
      await this.client.connect();
      this.db = this.client.db(process.env.DB1);
      (await this.db.command({ ping: 1 })).ok === 1
        ? console.log("[\x1b[32m OK \x1b[30m] db connection")
        : console.log("[\x1b[31m ERR \x1b[30m] db connection /run.ping");
      setTimeout(this.disconnect, 2000);
    } catch (err) {
      console.log("[\x1b[31m ERR \x1b[30m] db connection /run.catch ");
      return false
    }
    return true
  }
  disconnect = () => {
    this.client.close();
  };

  watcher(req, res, next) {
    console.log(req.app.locals.db?.s?.client?.topology?.s?.state);

    next();
  }
}

module.exports = new mongoController();

// process.on('SIGINT', (arg)=>{
//   console.log('sigINT ========= <<<<< =======');
//   process.exit()
// })
