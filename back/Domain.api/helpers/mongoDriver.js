const { MongoClient, TopologyDescriptionChangedEvent } = require("mongodb");

class mongoController {
  #poolSize = 5;
  db = null;

  constructor() {
    this.client = new MongoClient(process.env.MONGO, {
      maxPoolSize: this.#poolSize,
    });
  }

  async run() {
    if (await this.connect()) {
      return this.db;
    }
    if (!(await this.connect())) {
      this.crsDB()
      return { panic: "db connection" };
    }
  }

  connect = async () => {
    try {
      await this.client.connect();
      this.db = this.client.db(process.env.DB1);
      console.log("[\x1b[32m OK \x1b[30m] db connection");
      try {
        (await this.db.command({ ping: 1 })).ok === 1 &&
          console.log("[\x1b[32m OK \x1b[30m] db ping");
      } catch (err) {
        console.log("[\x1b[31m ERR \x1b[30m] db ping /connect.ping.catch");
      }
    } catch (err) {
      console.log("[\x1b[31m ERR \x1b[30m] db connection /connect.catch ");
      return false;
    }
    return true;
  };



  disconnect = () => {
    this.client.close();
  };



  //Connection Recovery Service to DataBase
  crsDB = async () => {
    let countOfTrying = 0;
    let step = 5
    
    function sleep(ms = 5000) {
      return new Promise((res) => {
        setTimeout(res, ms);
      });
    };

    console.log(`\x1b[34m Next connection attempt in ${step} s \x1b[30m`);
    
    await sleep(step*1000)
    while (countOfTrying < 3) {
      console.log(countOfTrying);
      if (await this.connect()) {
        countOfTrying = 3;
      }
      if (!(await this.connect())) {
        countOfTrying++;
        step = step*2
        console.log(`\x1b[34m Next connection attempt in ${step} s \x1b[30m`);
        await sleep(step*1000);
      }
    }
    console.log("crsDB DONE____ !");
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
