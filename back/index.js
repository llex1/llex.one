require("dotenv").config();
<<<<<<< HEAD

const fs = require('fs')
=======
>>>>>>> baf2b96bea1aa4cf3ec83d2dbee096783b5ec339
const { createServer } = require("https");
const connect = require("connect");
const vhost = require("vhost");
<<<<<<< HEAD

const ssl = require("./assets/ssl");

const AppllexOne = require('./llexOne')
const AppllexOneAPI = require('./llexOneAPI')

const options = {
  key: fs.readFileSync('./localhost+1-key.pem'), // Replace with the path to your key
  cert: fs.readFileSync('./localhost+1.pem') // Replace with the path to your certificate
}
=======
const cors = require("cors");

const { sslRootDomain, sslSub1Domain } = require("./assets/ssl");
const appRootDomain = require("./Domain");
const appSub1Domain = require("./Domain.api");
const Socket = require("./socket");

//dev dependency module
const morgan = require('morgan').token('servername', (req)=> req.client.servername);
>>>>>>> baf2b96bea1aa4cf3ec83d2dbee096783b5ec339


class Server {
  constructor() {
    this.app = null;
    this.server = null;
<<<<<<< HEAD
    this.socket = null;
=======
    this.enhance = null;
>>>>>>> baf2b96bea1aa4cf3ec83d2dbee096783b5ec339
  }
  initApp() {
    this.app = connect();
  }
  initServer() {
<<<<<<< HEAD
    this.server = createServer(options, this.app);
    this.server.addContext("localhost", ssl.llexOne); //==================================
    this.server.addContext("llex.one", ssl.llexOne);
    this.server.addContext("api.llex.one", ssl.apiLlexOne);
  }
  initMiddlewares() {
=======
    this.server = createServer(this.app);
    this.server.addContext(`${process.env.rootDomainName}`, sslRootDomain);
    this.server.addContext(`${process.env.sub1DomainName}`, sslSub1Domain);
  }
  initEnhance() {
    this.enhance = new Socket(this.server);
    this.enhance.run();
  }
  
  initMiddlewares() {
    //dev dependency
    this.app.use(morgan(':method \x1b[36m:servername:url\x1b[0m  - [:status] :response-time ms'))
    //dev dependency __END__
>>>>>>> baf2b96bea1aa4cf3ec83d2dbee096783b5ec339
    this.app.use(
      cors({
        origin: "*",
      })
    );
<<<<<<< HEAD
    this.app.use(vhost('localhost',AppllexOne)); //==================================
    this.app.use(vhost('llex.one',AppllexOne));
    this.app.use(vhost('api.llex.one',AppllexOneAPI));
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
=======
    this.app.use(vhost(`${process.env.rootDomainName}`, appRootDomain));
    this.app.use(vhost(`${process.env.sub1DomainName}`, appSub1Domain));
  }
  run() {
    this.initApp();
    this.initServer();
    this.initEnhance();
    this.initMiddlewares();
    this.server.listen(process.env.PORT || "8080", () => {
      console.log("[\x1b[32m OK \x1b[30m] server running on port", process.env.PORT);
    });
  }
}
new Server().run();
>>>>>>> baf2b96bea1aa4cf3ec83d2dbee096783b5ec339
