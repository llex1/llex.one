require("dotenv").config();

const { createServer } = require("https");
const connect = require("connect");
const cors = require("cors");
const vhost = require("vhost");
  
const ssl = require("./assets/ssl");

const AppllexOne = require('./llexOne')
const AppllexOneAPI = require('./llexOneAPI')



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
    this.server.addContext("llex.one", ssl.llexOne);
    this.server.addContext("api.llex.one", ssl.apiLlexOne);
  }
  initMiddlewares() {
    this.app.use(
      cors({
        origin: "*",
      })
    );
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