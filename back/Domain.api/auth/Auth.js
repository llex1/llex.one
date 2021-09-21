class Auth {
  constructor(){

  }
  async login(){

  }
  async info(req){
    const result = await req.app.locals.db.collection('users').findOne({'"name"': "Alex"})
    console.log(result);

  }
  
  
  
  
  
  
}
module.exports = new Auth()




// console.log(client.topology?.s?.state);