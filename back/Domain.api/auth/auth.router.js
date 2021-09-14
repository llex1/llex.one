const AuthController = require('./auth.controller')
const Auth = require('express').Router()

Auth.post('/register', AuthController.register)
Auth.post('/login', AuthController.login)
Auth.post('/logout', AuthController.logout)
// Auth.get('/:id', AuthController.info)

module.exports = Auth