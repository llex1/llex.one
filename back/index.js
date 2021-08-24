require("dotenv").config();

const { createServer } = require("https");
const connect = require("connect");
const vhost = require("vhost");

const cors = require("cors");

const rootDomainApp = require('./rootDomain');
const sub_Domain1App = require('./subDomain1');

const {rootDomainSSL, sub_Domain1SSL} = require("./assets/ssl");


class Server {
  constructor() {
    this.app = null;
    this.server = null;
    this.socket = null;
  }
  initApp() {
    this.app = connect();
  }
  initServer() {
    this.server = createServer(this.app);
    this.server.addContext(`${process.env.rootDomainName}`, rootDomainSSL);
    this.server.addContext(`${process.env.sub_Domain1Name}`, sub_Domain1SSL);
  }
  initMiddlewares() {
    this.app.use(
      cors({
        origin: "*",
      })
    );
    this.app.use(vhost(`${process.env.rootDomainName}`,rootDomainApp));
    this.app.use(vhost(`${process.env.sub_Domain1Name}`,sub_Domain1App));
  }
  runServer(){
    this.initApp()
    this.initServer()
    this.initMiddlewares()
    this.server.listen(process.env.PORT || '8080', ()=>{
      console.log('server is running on port ',process.env.PORT );
    })
  }
}
new Server().runServer()