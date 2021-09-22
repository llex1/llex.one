const express = require("express");
const { MongoClient } = require("mongodb");
const MongoController = require("./helpers/mongoDriver");

const authRouter = require("./auth/auth.router");

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false

// });
// rl.on('line', async (input)=>{
//   console.log(process.MDB?.topology?.s?.state);
//   await process.MDB.close()
//   console.log('----- close from Mongo');
//   console.log(process.MDB?.topology?.s?.state);
// })
// rl.on('line', async (input)=>{
//     console.log(input === "1");
//     process.exit()
// console.log(process.MDB?.topology?.s?.state);
// await process.MDB.close()
// console.log('----- close from Mongo');
// console.log(process.MDB?.topology?.s?.state);
// })

class App {
  constructor() {
    this.app = null;
    this.DBclient = null;
  }

  initApp() {
    this.app = express();
  }

  async initDB() {
    this.app.locals.db = await MongoController.run();
    // console.log(this.app.locals.db.s.client.topology.s.state);
  }

  initMiddlewares() {
    //Ukrainian language:
    //MongoController - слідкує за підключенням до бази. 
    //Відключає з'єднання через 5хв після останнього запиту 
    //і перепідключається коли це необхідно.
    //Розміл пулу - 5 одночасних запитів.
    this.app.use(MongoController.watcher);
    this.app.use(express.json());
  }
  initRoutes() {
    this.app.use("/", express.static(__dirname + "/public/"));
    this.app.use("/auth", authRouter);
  }
  run() {
    this.initApp();
    this.initDB();
    this.initMiddlewares();
    this.initRoutes();
    return this.app;
  }
}

module.exports = new App().run();
