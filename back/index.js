require("dotenv").config();
const { createServer } = require("https");
const connect = require("connect");
const vhost = require("vhost");
const cors = require("cors");

const { sslRootDomain, sslSub1Domain } = require("./assets/ssl");
const appRootDomain = require("./Domain");
const appSub1Domain = require("./Domain.api");
const Socket = require("./socket");

//dev dependency module
const morgan = require('morgan').token('servername', (req)=> req.client.servername);


class Server {
  constructor() {
    this.app = null;
    this.server = null;
    this.enhance = null;
  }
  initApp() {
    this.app = connect();
  }
  initServer() {
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
    this.app.use(
      cors({
        origin: "*",
      })
    );
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
