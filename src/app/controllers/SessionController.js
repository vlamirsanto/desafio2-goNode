const { User } = require('../models')

class SessionController {
  index (req, res) {
    return res.render('auth/signin')
  }

  async save (req, res) {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })

    if (!user) {
      req.flash('error', 'Usuário não encontrado')
      return res.redirect('/')
    }

    if (!(await user.checkPassword(password))) {
      req.flash('error', 'Senha incorreta!')
      return res.redirect('/')
    }

    req.session.user = user

    return res.redirect('/app/dashboard')
  }

  logout (req, res) {
    req.session.destroy(() => {
      res.clearCookie()

      res.redirect('/')
    })
  }
}

module.exports = new SessionController()
