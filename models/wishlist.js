const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Wishlist = new Schema(
    {
        name: { type: String, required: true },
        country: { type: String, required: true },
        _id: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('Wishlist', Wishlist)