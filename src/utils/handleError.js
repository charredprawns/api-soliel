const logger = require('./logger')

module.exports = (error, description, code = 400, res = false) => {
  if (code === null) {
    code = 400
  }
  // Define a response object
  const response = {
    status: 'error',
    error,
    description
  }

  logger.error(JSON.stringify(response, null, 2))

  // If no res object was provided, return response
  if (!res) {
    return response
    // Otherwise if res was provided then send the status
  } else if (res && res.status) {
    res.status(code).json(response)
    // Otherwise, ensure we are testing or else there is an error
  } else {
    throw new Error('Provided res is wrong type')
  }
}
