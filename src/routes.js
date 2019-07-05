const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const DashboardController = require('./app/controllers/DashboardController')
const FilesController = require('./app/controllers/FilesController')
const AppointmentsController = require('./app/controllers/AppointmentsController')
const AvailableController = require('./app/controllers/AvailableController')

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
routes.get('/app/dashboard', DashboardController.index)
routes.get('/files/:file', FilesController.index)
routes.get('/app/appointments/new/:provider', AppointmentsController.index)
routes.get('/app/available/:provider', AvailableController.index)

module.exports = routes
