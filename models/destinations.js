const mongoose = require('mongoose')
const Schema = mongoose.Schema
//add ref to wishlist


const Destinations = new Schema(
    {
        
        city: { type: String, required: true },
        country: { type: String, required: true },
        departure: {type: String, required: true },
        returndate: {type: String, required: true },
        people: { type: Number, required: true },
        image: { type: String, required: false },
        wishlist_id: { type: Schema.Types.ObjectId, ref: 'wishlist_id' }
    },
    { timestamps: true },
)

module.exports = Destinations