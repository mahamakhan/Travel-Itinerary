const { model } = require('mongoose');
const DestinationsSchema = require('./destinations');
const WishlistSchema = require('./wishlist');

const Destinations = model('Destinations', DestinationsSchema);
const Wishlist = model('Wishlist', WishlistSchema);

module.exports = {
  Destinations,
  Wishlist
};