require("dotenv").config();
const { createServer } = require("https");
const connect = require("connect");
const vhost = require("vhost");
const cors = require("cors");

const { rootDomainSSL, sub_Domain1SSL } = require("./assets/ssl");
const rootDomainApp = require("./rootDomain");
const sub_Domain1App = require("./subDomain1");
const Socket = require("./socket");

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
    this.server.addContext(`${process.env.rootDomainName}`, rootDomainSSL);
    this.server.addContext(`${process.env.sub_Domain1Name}`, sub_Domain1SSL);
  }
  initEnhance() {
    this.enhance = new Socket(this.server);
    this.enhance.run();
  }
  initMiddlewares() {
    this.app.use(
      cors({
        origin: "*",
      })
    );
    this.app.use(vhost(`${process.env.rootDomainName}`, rootDomainApp));
    this.app.use(vhost(`${process.env.sub_Domain1Name}`, sub_Domain1App));
  }
  run() {
    this.initApp();
    this.initServer();
    this.initEnhance();
    this.initMiddlewares();
    this.server.listen(process.env.PORT || "8080", () => {
      console.log("server is running on port ", process.env.PORT);
    });
  }
}
new Server().run();
