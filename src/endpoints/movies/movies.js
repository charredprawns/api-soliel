const { handleResponse } = require('utils')
const GET = (req, res) => {
  // TODO handle movie connection
  return handleResponse('yeet', res)
}

module.exports = { GET }
