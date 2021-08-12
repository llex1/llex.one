const http = require('http');
const express  = require('express');
const net = require('net')

class Server {
  constructor(){
    this.demon = null;
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
    this.demon.listen('8080', () => console.log('server is running on port 8080'))
  }
}

// new Server().runServre()
// console.log(net);


const echo = ()=>{
  x = 100;
  console.log('thit is echo');
  return x
}


const tango = (mike1) => (mike2) => {
  console.log('we have ', mike1, 'and ', mike2);
  console.log(x);
}
const papa = tango(echo())
papa('Alex')








// ==================================

