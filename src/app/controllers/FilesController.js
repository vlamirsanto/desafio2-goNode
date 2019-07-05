const path = require('path')

class FilesController {
  index (req, res) {
    const { file } = req.params

    const fileName = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      'tmp',
      'uploads',
      file
    )

    console.log(fileName)

    return res.sendFile(fileName)
  }
}

module.exports = new FilesController()
