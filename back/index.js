const express  = require('express');
require('dotenv').config();

class Server {
  constructor(){
    this.demon = null;
    this.PORT  = process.env.PORT;
  }
  initDemon(){
    this.demon = express()
  }
  initMiddlewares(){
    this.demon.use(express.json())
  }
  initRoutes(){
    this.demon.use('/', express .static('/'))
  }
  runServre(){
    this.initDemon()
    this.initMiddlewares()
    this.initRoutes()
    this.demon.listen(this.PORT, () => console.log('server is running on port 8080'))
  }
}

// new Server().runServre()


 


// ==================================
