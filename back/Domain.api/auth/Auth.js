const MongoDriver = require('../helpers/mongoDriver')

class Auth {
  constructor(){

  }
  async info(){
    const db = await MongoDriver.connect('llex1')
    console.log(db);




  }
  
  
  
  
  
  
}
module.exports = new Auth()




// console.log(client.topology?.s?.state);