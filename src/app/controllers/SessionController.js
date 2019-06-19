const { User } = require('../models')

class SessionController {
  index (req, res) {
    return res.render('auth/signin')
  }

  async save (req, res) {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })

    if (!user) {
      console.log('Usuário não encontrado')
      return res.redirect('/')
    }

    if (!(await user.checkPassword(password))) {
      console.log('Senha incorreta!')
      return res.redirect('/')
    }

    return res.redirect('/dashboard')
  }
}

module.exports = new SessionController()
