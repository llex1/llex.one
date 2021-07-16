const express = require('express');
const fs = require('fs/promises');

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
    console.log('here');
    this.server.use('/', express.static(__dirname + '/../front/public/'))
  }
  runServer(){
    this.initServer()
    this.initMiddlewares()
    this.initRoutes()
    this.server.listen(process.env.PORT, ()=>{
      console.log('server on port ', process.env.PORT);
    })
  }

}

new Server().runServer()