const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')

// Aplicando o middleware de autenticação em todas as rotas /app
routes.use('/app', authMiddleware)

routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success')
  res.locals.flashError = req.flash('error')

  return next()
})

routes.get('/', SessionController.index)
routes.post('/signin', SessionController.save)
routes.get('/signup', UserController.index)
routes.post('/signup', upload.single('avatar'), UserController.save)
routes.get('/app/logout', SessionController.logout)
routes.get('/app/dashboard', (req, res) => {
  console.log(req.session.user)

  return res.render('dashboard')
})

module.exports = routes
