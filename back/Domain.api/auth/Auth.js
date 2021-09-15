const {MongoClient} = require('mongodb');

class Auth {
  constructor(){

  }
  async info(){
    const client = new MongoClient(process.env.MONGO)
    await client.connect()
    await client.db('kapusta')
    console.log(client.topology?.s?.state);
    console.log('-=================================');
    await client.close()
    console.log(client.topology?.s?.state);
    console.log('-=================================');



  }






}
module.exports = new Auth()