const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Wishlist = new Schema(
    {
        name: { type: String, required: true },
        city:{ type: String, Required: true }

        
    },
    { timestamps: true },
)

module.exports =  Wishlist