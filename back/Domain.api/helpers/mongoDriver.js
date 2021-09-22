const { MongoClient } = require("mongodb");

class mongoController {
  db = null;
  ccs = {
    status: false,
    timersID: {},
  };

  constructor(poolSize = 5) {
    this.client = new MongoClient(process.env.MONGO, {
      maxPoolSize: poolSize,
    });
  }

  async run() {
    process.on('SIGINT', (arg)=>{
      process.exit()
    })
    process.on('exit', (code) => {
      this.disconnect()
    });
    if (await this.connect()) {
      return this.db;
    }
    if (!(await this.connect())) {
      return { panic: "Altas connection" };
    }
  }

  connect = async () => {
    console.log('start connection________');
    try {
      await this.client.connect();
      this.db = this.client.db(process.env.DB1);
      console.log("[\x1b[32m OK \x1b[30m] Altas connection");
    } catch (err) {
      console.log("[\x1b[31m ERR \x1b[30m] Altas connection /connect.catch ");
      return false;
    }
    console.log('Finish connection________');
    return true;
  };

  disconnect = () => {
    this.client.close();
    console.log("[\x1b[32m OK \x1b[30m] Altas disconnect");
  };

  //Connection Control Service to DataBase
  watcher = (req, res, next) => {
    // console.log('WATCHER');
    this.connect()
    console.log(req.app.locals.db === this.db);
    console.log(req.app.locals.db?.s?.client?.topology?.s?.state);

    next();
  };
}

module.exports = new mongoController();

// console.log(`\x1b[34m Next connection attempt in ${step} s \x1b[30m`);

// process.on('SIGINT', (arg)=>{
//   console.log('sigINT ========= <<<<< =======');
//   process.exit()
// })
