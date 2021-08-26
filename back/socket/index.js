// function socketHub(socket) {
//   socket.on("connect", (client) => {
//     console.log(client.id);
//   });
// }

class SocketHub{
  constructor(){
    this.socket = null
  }
  initSochet(arg){
    this.socket = arg
  }
  runSocket(){

  }
}


module.exports = socketHub;
