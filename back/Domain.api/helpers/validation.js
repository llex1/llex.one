const joi = require('joi')



class Validation{


  email = (req, res, next)=>{
    console.log(req.body);

    next()
  }
  pass = (req, res, next) =>{
    
    next()
  }




}

module.exports = new Validation()