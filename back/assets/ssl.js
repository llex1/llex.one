const {readFileSync} = require('fs')

<<<<<<< HEAD
// const llexOne = {
//   key : readFileSync(`${process.env.LLEXONE_KEYPATH}`),
//   sert : readFileSync(`${process.env.LLEXONE_SERTPATH}`)
// }
// const apiLlexOne = {
//   key : readFileSync(`${process.env.API_LLEXONE_KEYPATH}`),
//   sert : readFileSync(`${process.env.API_LLEXONE_SERTPATH}`)
// }
const localhost = {
    key: readFileSync(__dirname+'/../localhost+1-key.pem'),
    sert: readFileSync(__dirname+'/../localhost+1.pem')
  }

module.exports = {
  // llexOne,
  // apiLlexOne,
  localhost
=======
const sslRootDomain = {
  key : readFileSync(__dirname+`${process.env.sslRootDomain_k}`),
  cert : readFileSync(__dirname+`${process.env.sslRootDomain_c}`)
}
const sslSub1Domain = {
  key : readFileSync(__dirname+`${process.env.sslSub1Domain_k}`),
  cert : readFileSync(__dirname+`${process.env.sslSub1Domain_c}`)
}

module.exports = {
  sslRootDomain,
  sslSub1Domain
>>>>>>> baf2b96bea1aa4cf3ec83d2dbee096783b5ec339
}