//npm modules
require("dotenv").config();
const cors = require("cors");
const fs = require("fs");

const connect = require("connect");
const { json } = require("express");
const vhost = require("vhost");
const https = require("https");
const socket = require("socket.io");
//dev-dependences
const morgan = require("morgan");
//add module
const chatNotification = require('./socket.chatNotification');

const _privkey = fs.readFileSync("/etc/letsencrypt/live/llex.one/privkey.pem");
const _cert = fs.readFileSync("/etc/letsencrypt/live/llex.one/fullchain.pem");
const API_privkey = fs.readFileSync(
  "/etc/letsencrypt/live/api.llex.one/privkey.pem"
);
const API_cert = fs.readFileSync(
  "/etc/letsencrypt/live/api.llex.one/fullchain.pem"
);
const siteOptions = {
  key: _privkey,
  cert: _cert,
};
const apiOptions = {
  key: API_privkey,
  cert: API_cert,
};
const socketOptions = {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
};

//app
const site = '';
// const site = require("./llex.one/index.js");
const Api = '';
// const Api = require("./api.llex.one/index.js").run();

class Server {
  constructor() {
    this.app = null;
    this.v_Api = null;
    this.v_Site = null;
    this.server = null;
    this.socket = {};
  }
  initApp() {
    this.app = connect();
    this.vhostApi = Api;
  }
  initMiddlewares() {
    this.app.use(
      cors({
        origin: "*",
      })
    );
    this.app.use(json());
    this.app.use(morgan("dev"));
    this.app.use((...args) => {
      args[0]._socket = this.socket;
      args[2]();
    });
    this.app.use(vhost("llex.one", site));
    this.app.use(vhost("api.llex.one", this.vhostApi));
  }
  initServer() {
    this.server = https.createServer(siteOptions, this.app);
    this.server.addContext("api.llex.one", apiOptions);
  }
  initSocket() {
    this.io = socket(this.server, socketOptions);
    this.io.on("connection", (socket) => {
      chatNotification(socket, 'connect');
      this.socket[socket.id] = socket;
      socket.on('disconnect', ()=>{
        chatNotification(socket, 'disconnect');
        delete this.socket[socket.id]
        // console.log('DELETE', socket.id);
      })
      socket.on('message', (data)=>{
        chatNotification(socket, 'message', data)
      })
    });
  }
  runServer() {
    this.initApp();
    this.initServer();
    this.initMiddlewares();
    this.initSocket();
    this.server.listen(process.env.PORT, () => {
      console.log(`Server on port [ :${process.env.PORT} ]`);
    });
  }
}
new Server().runServer();
