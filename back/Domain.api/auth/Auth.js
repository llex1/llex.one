const MongoDriver = require('../helpers/mongoDriver')

class Auth {
  constructor(){

  }
  async info(){
    process.env.testUUU = 'hello from process controller';



    const client = await MongoDriver.connect()
    // const result = await db.collection('users').findOne({'name': 'Alex'})
    // console.log(result);

    // console.log(client.close.toString());

    MongoDriver.disconnect()
    // await client.close({force: true})
    
    
    
    
    console.log(client.topology?.s?.state, '----- TOP');
    console.log('------here-----');






  }
  
  
  
  
  
  
}
module.exports = new Auth()




// console.log(client.topology?.s?.state);