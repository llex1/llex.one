const fetch = require("node-fetch");

function chatNotification(socket, opt, data) {
  let id = socket.id;
  let text = "";
  if (opt === "connect") {
    let arr = socket.handshake.address.split(":");
    let ip = arr[arr.length - 1];
    let uagent = socket.handshake.headers["user-agent"];
    let origin = socket.handshake.headers.origin;
    text = 
`*${id}*••
*ip* _${ip}_
*origin* _${origin}_
*uagent* _${uagent}_`;
    push(text);
  }
  if (opt === "disconnect") {
    text = 
`_${id}_
*disconnect*
`;
    push(text);
  }
  if(opt === "message"){
    push(data);
  }

  function push(text) {
    fetch(`https://api.telegram.org/bot${process.env.llexBot}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        chat_id: process.env.chatID,
        text: text,
        parse_mode: "Markdown",
      }),
    })
      // .then((data) => data.json())
      // .then((json) => console.log(json));
  }
}

module.exports = chatNotification;
