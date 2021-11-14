const express = require("express");
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
// console.log(input === "1");
//     process.exit()
// })

class App {

  app = null;

  initApp() {
    this.app = express();
  }

  async initDB() {
    this.app.locals.db = await (new MongoController(process.env.DB1)).run()
  }

  initMiddlewares() {
    // this.app.use(MongoController.watcher);
    this.app.use(express.json());
  }
  initRoutes() {
    this.app.use("/", express.static(__dirname + "/public/"));
    this.app.use("/auth", authRouter);
    this.app.use("/auth1");
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
