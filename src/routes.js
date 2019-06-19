const express = require('express')
const UserController = require('./app/controllers/UserController')

const routes = express.Router()

routes.get('/signup', UserController.index)
routes.post('/signup', UserController.save)

module.exports = routes
