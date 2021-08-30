const express = require("express");

class App {
  constructor() {
    this.app = null;
  }
  initApp() {
    this.app = express();
  }
  initMiddlewares() {}
  initRoutes() {
    this.app.use((req, res, next) => {
      res.send("<h1>Sub Domain one !!</h1>");
      next();
    });
  }
  run() {
    this.initApp();
    this.initMiddlewares();
    this.initRoutes();
    return this.app;
  }
}

module.exports = new App().run();
