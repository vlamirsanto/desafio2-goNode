module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    // Cria locals.user para ser usado nas views,
    res.locals.user = req.session.user

    // Continua o fluxo do middleware
    return next()
  }

  // Redireciona para o login
  return res.redirect('/')
}
