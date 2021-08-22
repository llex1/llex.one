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
    this.app.use(express.static(__dirname+'../'));
    this.app.use((req, res, next)=>{
      res.send('<h1>llex one Hello</h1>')
    });
  }
  run(){
    this.initApp()
    this.initMiddlewares()
    this.initRoutes()
    return this.app
  }
}

module.exports = new App().run()