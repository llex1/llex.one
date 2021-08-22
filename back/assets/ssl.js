const {readFileSync} = require('fs')

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
}