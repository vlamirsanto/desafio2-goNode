const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

const routes = express.Router()

routes.get('/', SessionController.index)
routes.post('/signin', SessionController.save)
routes.get('/signup', UserController.index)
routes.post('/signup', upload.single('avatar'), UserController.save)
routes.get('/dashboard', (req, res) => res.render('dashboard'))

module.exports = routes
