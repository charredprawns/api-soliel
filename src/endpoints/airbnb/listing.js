const ListingModel = require('models/ListingModel')
const { handleResponse, handleError } = require('utils')
const GET = async (req, res) => {
  const numberOfListings = parseInt(req.body.numberOfListings)

  if (!numberOfListings || parseInt(numberOfListings) <= 0) {
    return handleError(
      'Invlid number of Movies',
      'Please enter a valid number of movies'
    )
  } else {
    try {
      const result = await ListingModel.find({ accommodates: 4 }).limit(
        numberOfListings
      )
      return handleResponse(result, res)
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = { GET }
