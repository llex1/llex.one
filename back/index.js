require("dotenv").config();

const { createServer } = require("https");
const connect = require("connect");
const cors = require("cors");
const vhost = require("vhost");

const ssl = require("./assets/ssl");

const App_llexOne = require('./llexOne')
const App_llexOne_API = require('./llexOneAPI')



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
    this.app.use(vhost('llex.one',App_llexOne));
  }
  runServer(){
    this.initApp()
    this.initServer()
    this.initMiddlewares()
    this.server.listen(process.env.PORT || '8080', ()=>{
      console.log('server is running');
    })
  }
}


new Server().runServer()