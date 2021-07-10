import { io } from "socket.io-client";

class Socket{
  socket = null
  hook = null

  initSocket(){
    // this.socket = io('https://api.llex.one:443', {
    this.socket = io('', {
      transports: ['websocket'],
      autoConnect: false
    });
    this.initListeners()
  }
  initListeners(){
    this.socket.on('connect', ()=>{
      // console.log(this.socket.id);
    })
    this.socket.on('disconnect', (reason)=>{
      // console.log(reason);
    })
    this.socket.on('message', (value)=>{
      this.hook(value)
    })
  }
  connect(cb){
    this.hook = cb
    this.socket.connect()
  }
  disconnect(){
    this.socket.disconnect()
  }
  emit(imitName, data){
    this.socket.emit(imitName, data)
  }

}
export default new Socket()