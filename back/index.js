require("dotenv").config();

// const { createServer } = require("https");
const http = require("https");
const connect = require("connect");
const cors = require("cors");
const vhost = require("vhost");
  
const ssl = require("./assets/ssl");

const AppllexOne = require('./llexOne')
const AppllexOneAPI = require('./llexOneAPI')


// class Server {
//   constructor() {
//     this.app = null;
//     this.server = null;
//     this.socket = null;
//   }
//   initApp() {
//     this.app = connect();
//   }
//   initServer() {
//     this.server = createServer(this.app);
//     this.server.addContext("llex.one", ssl.llexOne);
//     this.server.addContext("api.llex.one", ssl.apiLlexOne);
//   }
//   initMiddlewares() {
//     this.app.use(
//       cors({
//         origin: "*",
//       })
//     );
//     this.app.use(vhost('llex.one',AppllexOne));
//     this.app.use(vhost('api.llex.one',AppllexOneAPI));
//   }
//   runServer(){
//     this.initApp()
//     this.initServer()
//     this.initMiddlewares()
//     this.server.listen(process.env.PORT || '8080', ()=>{
//       console.log('server is running on port ',process.env.PORT );
//     })
//   }
// }
// new Server().runServer()




const test = '==================================================='

http.createServer(ssl.llexOne, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen('8000');


//===========================================================


// const specifirdPORT = '443'
// const handler = (req,res, next)=>{
//   console.log('handler');
// }
// const cb = (...args) =>{
//   console.log('serve is listening port ', specifirdPORT);
//   console.dir({args});
//   console.log(args.length);
// }

// const server = http.createServer(handler).listen(specifirdPORT,cb )
// console.log(server);