const {readFileSync} = require('fs')

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
}