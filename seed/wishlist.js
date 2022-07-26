const db = require('../db')
const { Wishlist } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const wishlist = async () => {
  const wishlists = [
    {
        name:'Work' ,
        
        
      
       
       
    },
    {
        name: 'Leisure',
       
        
    }
  ]

  await Wishlist.insertMany(wishlists)
  console.log('Created wishlist!')
}
const run = async () => {
  await wishlist()
  db.close()
}
run()