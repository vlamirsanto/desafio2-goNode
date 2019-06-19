const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.middlewares()
    this.views()
    this.routes()
  }

  middlewares () {
    this.express.use(express.urlencoded({ extended: false }))
  }

  views () {
    // Configurando o Nunjucks
    nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
      watch: this.isDev,
      express: this.express,
      autoescape: true
    })

    // Configurando a engine do Nunjucks
    this.express.set('view engine', 'njk')

    // Configurando o path public
    this.express.use(express.static(path.resolve(__dirname, 'public')))
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
