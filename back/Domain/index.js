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
<<<<<<< HEAD:back/llexOne/index.js
    this.app.use(express.static(__dirname+'../'));
    this.app.use((req, res, next)=>{
      res.send('<h1>llex one Hello</h1>')
    });
=======
>>>>>>> baf2b96bea1aa4cf3ec83d2dbee096783b5ec339:back/Domain/index.js
  }
  run(){
    this.initApp()
    this.initMiddlewares()
    this.initRoutes()
    return this.app
  }
}

module.exports = new App().run()