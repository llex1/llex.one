const {MongoClient} = require('mongodb')


class Driver {

  client = new MongoClient(process.env.MONGO);
  db = null;
  idDisconnectDelay = null;

  async connect(dbName){
    if(!dbName){
      await this.client.connect()
      return this.client
    }
    if(dbName && typeof dbName  === 'string'){
      await this.client.connect()
      this.db = await this.client.db(dbName)
      return this.db
    }
  }





  
  disconnect(){ 
    this.client.disconnect()
  }

}

module.exports = new Driver()