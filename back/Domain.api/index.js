const express = require("express");

const authRouter = require('./auth/auth.router');

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false

});
// rl.on('line', async (input)=>{
//   console.log(process.MDB?.topology?.s?.state);
//   await process.MDB.close()
//   console.log('----- close from Mongo');
//   console.log(process.MDB?.topology?.s?.state);
// })
// rl.on('line', async (input)=>{
//     console.log(input === "1");
//     console.log(process.MDB?.topology?.s?.state);
//     await process.MDB.close()
//     console.log('----- close from Mongo');
//     console.log(process.MDB?.topology?.s?.state);
  
// })

class App {
  constructor() {
    this.app = null;
  }
  initApp() {
    this.app = express();
  }
  initMiddlewares() {
    this.app.use(express.json())
  }
  initRoutes() {
    this.app.use('/', express.static(__dirname + '/public/'))
    this.app.use('/auth', authRouter)
  }
  run() {
    this.initApp();
    this.initMiddlewares();
    this.initRoutes();
    return this.app;
  }
}

module.exports = new App().run();
