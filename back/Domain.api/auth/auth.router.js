const AuthController = require('./auth.controller')
const Auth = require('express').Router()

Auth.post('/login', AuthController.login)
Auth.post('/logout', AuthController.logout)
Auth.post('/register', AuthController.register)
// Auth.get('/', AuthController.info)

module.exports = Auth