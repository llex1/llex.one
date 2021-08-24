const {readFileSync} = require('fs')

const llexOne = {
  key : readFileSync(__dirname+`${process.env.LLEXONE_KEYPATH}`),
  cert : readFileSync(__dirname+`${process.env.LLEXONE_CERTPATH}`)
}
const apillexOne = {
  key : readFileSync(__dirname+`${process.env.API_LLEXONE_KEYPATH}`),
  cert : readFileSync(__dirname+`${process.env.API_LLEXONE_CERTPATH}`)
}


module.exports = {
  llexOne,
  apillexOne
}