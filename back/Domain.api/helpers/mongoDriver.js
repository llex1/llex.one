const {MongoClient} = require('mongodb')


class Driver {

  client = new MongoClient(process.env.MONGO);
  idDisconnectDelay = null;

  connect = async (dbName) => (collectionName) => () =>{
    this.client.on('open', ()=>{console.log('OPEN')})
    this.client.on('close', ()=>{console.log('CLOSE')})
    // await this.client.connect()
    return this.client
}

  // async connect(){
  //     this.client.on('open', ()=>{console.log('OPEN')})
  //     this.client.on('close', ()=>{console.log('CLOSE')})
  //     await this.client.connect()
  //     return this.client
  // }
  disconnect(){ 
    this.client.close()
  }
  autoDisconnect(){

  }





}

module.exports = new Driver()