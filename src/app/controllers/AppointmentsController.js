const { User } = require('../models')

class AppointmentsController {
  async index (req, res) {
    const provider = await User.findByPk(req.params.provider)

    return res.render('appointments/index', { provider })
  }
}

module.exports = new AppointmentsController()
