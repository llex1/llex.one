const {readFileSync} = require('fs')

const rootDomainSSL = {
  key : readFileSync(__dirname+`${process.env.rootDomainSSL_k}`),
  cert : readFileSync(__dirname+`${process.env.rootDomainSSL_c}`)
}
const sub_Domain1SSL = {
  key : readFileSync(__dirname+`${process.env.sub_Domain1SSL_k}`),
  cert : readFileSync(__dirname+`${process.env.sub_Domain1SSL_c}`)
}


module.exports = {
  rootDomainSSL,
  sub_Domain1SSL
}