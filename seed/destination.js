const db = require('../db')
const { Wishlist, Destinations } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const addDestination = async () => {
  const wishlists = await Wishlist.find({}) 
  const destinations = [
    {
        
        city: 'Paris',
        country: 'France' ,
        departure: 'May',
        returndate: 'June' ,
        people: 5,
        image: 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900',
        wishlist_id: wishlists[0]._id
    },
    {
        
        city: 'Santorini',
        country: 'Greece',
        departure: 'May',
        returndate: 'June',
        people: 3,
        image: 'https://handluggageonly.co.uk/wp-content/uploads/2015/05/Hand-Luggage-Only-7.jpg' ,
        wishlist_id: wishlists[1]._id
    },
    {
     
      city: 'Rome',
      country: 'Italy',
      departure: 'August',
      returndate: 'September',
      people: 6,
      image: 'https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg',
      wishlist_id: wishlists[0]._id
    },
    {
      
      city: 'Bern',
      country: 'Switzerland',
      departure: 'july',
      returndate: 'August',
      people: 3,
      image: 'https://img.theculturetrip.com/450x/smart/wp-content/uploads/2021/02/k26rr6-e1617362650904.jpg',
      wishlist_id: wishlists[1]._id
    },
    {
      
      city: 'Kobe',
      country: 'Japan',
      departure: 'October',
      returndate: 'November',
      people: 7,
      image: 'https://www.worldtravelguide.net/wp-content/uploads/2017/03/shu-Japan-Nachisan-Seiganto_189118511-1440x823-1.jpg',
      wishlist_id: wishlists[1]._id
    },
    {
     
      city: 'Banff',
      country: 'Canada',
      departure: 'March',
      returndate:'April',
      people: 9,
      image: 'https://www.banfflakelouise.com/sites/default/files/styles/l_1600_natural/public/kimsreizen-instagram-2132-ig-17954350378760829.jpg?itok=5_84dbq8',
      wishlist_id:wishlists[0]._id
    }
  ]

  await Destinations.insertMany(destinations)
  console.log('Created wishlists!')
}
const run = async () => {
  await addDestination();
  db.close()
}




run()