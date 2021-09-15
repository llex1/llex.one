const express = require('express')


class App {
  constructor(){
    this.app = null
  }
  initApp(){
    this.app = express()
  }
  initMiddlewares(){
    this.app.use('/', express.static(__dirname+'/public/'))
  }
  initRoutes(){
  }
  run(){
    this.initApp()
    this.initMiddlewares()
    this.initRoutes()
    return this.app
  }
}

module.exports = new App().run()