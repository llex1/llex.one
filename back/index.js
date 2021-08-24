require("dotenv").config();

const { createServer } = require("https");
const connect = require("connect");
const cors = require("cors");
const vhost = require("vhost");

const ssl = require("./assets/ssl");

// const AppllexOne = require('./llexOne')
// const AppllexOneAPI = require('./llexOneAPI')

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

// const options = {
//   key: readFileSync('./mkcert/localhost-key.pem'),
//   cert: readFileSync('./mkcert/localhost.pem')
// }

const app = connect();

// app.use((req, res, next) => {
//   console.log("herer");
//   // res.send('<h1>llex.one greeting You</h1>')
//   res.end("<h1>llex.one greeting You here</h1>");
//   next();
// });

app.use(vhost('localhost', (req, res, next) => {
  console.log("herer");
  // res.send('<h1>llex.one greeting You</h1>')
  res.end("<h1>llex.one greeting You here</h1>");
  next();
}))

createServer(ssl.llexOne, app).listen("8080", () => {
  console.log("run on port 8080");
});
