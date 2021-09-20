const {MongoClient} = require('mongodb')


class Driver {

  client = new MongoClient(process.env.MONGO);
  idDisconnectDelay = null;
  counter = 0
  db = ''


  connect(){

  }
  disconnect(){

  }





  run(){
    console.log('Run driver');
 
  }

}

module.exports = new Driver()



// process.on('SIGINT', (arg)=>{
//   console.log('sigINT ========= <<<<< =======');
//   process.exit()
// })