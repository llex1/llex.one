const io = require("socket.io");

class Socket {
  constructor(server) {
    this.socket = io(server);
  }
  run() {
    this.socket.on("connect", this.controller);
  }
  controller(client) {
    console.log(client.id);
  }
}

module.exports = Socket;
