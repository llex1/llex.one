const io = require("socket.io");

class Socket {
  constructor(server) {
    this.socket = io(server);
  }

  rootController() {
    this.socket.on("connect", this.clientController);
  }

  clientController(client) {
    console.log(client.id);
  }

  run() {
    this.rootController();
  }
}

module.exports = Socket;
