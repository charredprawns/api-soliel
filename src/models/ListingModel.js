const Mongoose = require('mongoose')

const ListingModel = Mongoose.model(
  'listing',
  {
    _id: String,
    listing_url: String,
    name: String,
    summary: String,
    space: String,
    description: String,
    neightborhood_overview: String,
    notes: String,
    transit: String,
    access: String,
    interaction: String,
    house_Rules: String,
    property_type: String,
    room_stype: String,
    bed_type: String,
    cancellation_policy: String,
    minimum_nights: String,
    maximum_nights: String,
    accomodates: Number,
    bedrooms: Number,
    beds: Number,
    number_of_reviews: Number,
    bathrooms: Number
  },
  'listingsAndReviews'
)

module.exports = ListingModel
