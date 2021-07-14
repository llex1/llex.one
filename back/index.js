//npm modules
require("dotenv").config();
const https = require("https");
const connect = require("connect");
const vhost = require("vhost");
const cors = require('cors');
const fs = require('fs')
//dev-dependences
const morgan = require('morgan')

const _privkey = fs.readFileSync("/etc/letsencrypt/live/llex.one/privkey.pem");
const _cert = fs.readFileSync("/etc/letsencrypt/live/llex.one/fullchain.pem");
const API_privkey = fs.readFileSync("/etc/letsencrypt/live/api.llex.one/privkey.pem");
const API_cert = fs.readFileSync("/etc/letsencrypt/live/api.llex.one/fullchain.pem");
const siteOptions = {
  key: _privkey,
  cert: _cert,
};
const apiOptions = {
  key: API_privkey,
  cert: API_cert,
}

//app
const site = require("./llex.one/index.js");
const api = require("./api.llex.one/index.js");

class Server {
  constructor() {
    this.app = null;
    this.server = null;
    this.serverStatus = null;
  }
  initApp() {
    this.app = connect();
  }
  initMiddlewares() {
    this.app.use(cors({
      origin: '*'
    }))
    this.app.use(morgan('dev'))
    this.app.use(vhost("llex.one", site));
    this.app.use(vhost("api.llex.one", api));
  }
  initServer() {
    this.server = https.createServer(siteOptions, this.app);
    this.server.addContext('api.llex.one', apiOptions)
    
  }
  *runServer(isEnhance=true) {
    this.initApp();
    this.initMiddlewares();
    this.initServer();
    if(isEnhance){
      this.server.listen(process.env.PORT);
      this.serverStatus = `Server on port [ :${process.env.PORT} ]`
      return this
    }
    this.serverStatus = false;
    this.serverStatus = yield this.serverStatus
    if(this.serverStatus){
      this.server.listen(process.env.PORT);
      this.serverStatus = `Server on port [ :${process.env.PORT} ]`
      return this
    }
    if(!this.serverStatus){
      return this.serverStatus
    }
  }
  get status(){
    return this.serverStatus
  }
}

module.exports = Server;