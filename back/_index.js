const express = require('express');

require('dotenv').config()

class Server {
  server = null;

  initServer(){
    this.server = express()
  }
  initMiddlewares(){
    this.server.use(express.json())
  }
  initRoutes(){

  }
  runServer(){
    this.initServer()
    this.initMiddlewares()
    this.initMiddlewares()
    this.server.listen(process.env.PORT, ()=>{
      console.log('server on port ', process.env.PORT);
    })
  }

}

new Server().runServer()