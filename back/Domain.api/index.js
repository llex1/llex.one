const express = require("express");
const mongodb = require('mongodb');

const authRouter = require('./auth/auth.router');

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
