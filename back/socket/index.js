function socketHub(socket) {
  socket.on("connect", (client) => {
    console.log(client.id);
  });
}

module.exports = socketHub;
