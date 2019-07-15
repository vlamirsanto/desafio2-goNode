const { User, Appointment } = require('../models')

class AppointmentsController {
  async index (req, res) {
    const provider = await User.findByPk(req.params.provider)

    return res.render('appointments/index', { provider })
  }

  async save (req, res) {
    const { provider } = req.params
    const { id } = req.session.user
    const { date } = req.body

    await Appointment.create({
      date,
      provider_id: provider,
      user_id: id
    })

    return res.redirect('/app/dashboard')
  }
}

module.exports = new AppointmentsController()
