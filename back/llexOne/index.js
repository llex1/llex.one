const express = require('express')

class App {
  constructor(){
    this.app = null
  }
  initApp(){
    this.app = express()
  }
  initMiddlewares(){
  }
  initRoutes(){
    this.app.use(express.static('../'));
  }
  run(){
    this.initApp()
    this.initMiddlewares()
    this.initRoutes()
    return this.app
  }
}

module.exports = new App().run()