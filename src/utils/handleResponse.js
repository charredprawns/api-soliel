// Returns a valid response to the user
module.exports = (response, res) => {
  // Build a response object and give it status success
  response = {
    status: 'success',
    ...response
  }

  // If we are in test mode and no res object was provided, return response
  if (!res) {
    return response
    // Otherwise, if a res was provided, send the response
  } else if (res && res.json) {
    res.json(response)
  } else {
    return true
  }
}
