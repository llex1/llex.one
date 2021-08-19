const {readFileSync} = require('fs')

const llexOne = {
  key : readFileSync(`${process.env.LLEXONE_KEYPATH}`),
  sert : readFileSync(`${process.env.LLEXONE_SERTPATH}`)
}
const apiLlexOne = {
  key : readFileSync(`${process.env.API_LLEXONE_KEYPATH}`),
  sert : readFileSync(`${process.env.API_LLEXONE_SERTPATH}`)
}

module.exports = {
  llexOne,
  apiLlexOne
}