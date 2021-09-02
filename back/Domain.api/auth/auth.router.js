const AuthController = require('./auth.controller')
const Auth = require('express').Router()

Auth.post('/register', AuthController.register)
Auth.post('/', AuthController.login)
Auth.post('/', AuthController.logout)

module.exports = Auth