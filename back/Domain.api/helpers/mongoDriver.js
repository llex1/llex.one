const {MongoClient} = require('mongodb')


class Driver {

  client = new MongoClient(process.env.MONGO);
  idDisconnectDelay = null;
  counter = 0
  db = ''


  async run(){
    this.client.on('open', ()=>{
      console.log('detected ........ operation');
    })
    this.client = await this.client.connect()
    console.log(this.client.topology.s.state);
    
    process.MDB = this.client
    process.MDB.on('serverClosed', ()=>{
      console.log('detected CLOSE operation');
    })
    // await this.client.close()
  }




  connect(){
  }
  disconnect(){ 
  }
  autoDisconnect(){

  }





}

module.exports = new Driver()



 // let i =0
    // const arr = [5.2345, 123.3444, 4543534435.345]
    // while(i<10000000){
    //   arr.forEach((el)=> el*i)
    //   i++
    // }