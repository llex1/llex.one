const {readFileSync} = require('fs')

const llexOne = {
  key : readFileSync(__dirname+`${process.env.LLEXONE_KEYPATH}`),
  cert : readFileSync(__dirname+`${process.env.LLEXONE_SERTPATH}`)
}
// console.log(__dirname+ '../mkcert/localhost-key.pem');
// const apiLlexOne = {
//   key : readFileSync(`${process.env.API_LLEXONE_KEYPATH}`),
//   cert : readFileSync(`${process.env.API_LLEXONE_SERTPATH}`)
// }

module.exports = {
  llexOne,
  // apiLlexOne
}