const db = require('../db')
const { Wishlist } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const wishlist = async () => {
  const wishlists = [
    {
        name:'Almizan' ,
        country: Pakistan,
        _id:ObjectId("3e399709171f6188450e43d2")
      
       
       
    },
    {
        name: 'Imran',
        country: 'China',
        _id:ObjectId("868769m463j46g3kj6g2k539879")
    }
  ]

  await Publisher.insertMany(wishlists)
  console.log('Created wishlist!')
}
const run = async () => {
  await wishlist()
  db.close()
}
run()