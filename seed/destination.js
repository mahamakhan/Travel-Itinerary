const db = require('../db')
const { Wishlist, Destinations } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const addDestination = async () => {
  const destinations = [
    {
        name: 'Maham',
        city: 'Paris',
        country: 'France' ,
        departure: 'May',
        return: 'June' ,
        people: 5,
        image: 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900',
        wishlist_id: ObjectId("3e399709171f6188450e43d2")
    },
    {
        name: 'Hafsa',
        city: 'Santorini',
        country: 'Greece',
        departure: May,
        return: June,
        people: 3,
        image: 'https://handluggageonly.co.uk/wp-content/uploads/2015/05/Hand-Luggage-Only-7.jpg' ,
        wishlist_id: ObjectId("378nin67u6n7u6yuy7698743d2")
    },
    {
      name: 'Kokab',
      city: 'Rome',
      country: 'Italy',
      departure: 'August',
      return: 'September',
      people: 6,
      image: 'https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg',
      wishlist_id: ObjectId("3e87o8787j79j79jk987987j8e43d2")
    },
    {
      name: 'Rabia',
      city: 'Bern',
      country: 'Switzerland',
      departure: 'july',
      return: 'August',
      people: 3,
      image: 'https://img.theculturetrip.com/450x/smart/wp-content/uploads/2021/02/k26rr6-e1617362650904.jpg',
      wishlist_id: ObjectId("76785v76iu797j989o7188450e43d2")
    },
    {
      name: 'Tayiaba',
      city: 'Kobe',
      country: 'Japan',
      departure: 'October',
      return: 'November',
      people: 7,
      image: 'https://www.worldtravelguide.net/wp-content/uploads/2017/03/shu-Japan-Nachisan-Seiganto_189118511-1440x823-1.jpg',
      wishlist_id: ObjectId("987m98j9898yu9877979m897987987")
    },
    {
      name: 'Aiman',
      city: 'Banff',
      country: 'Canada',
      departure: 'March',
      return:'April',
      people: 9,
      image: 'https://www.banfflakelouise.com/sites/default/files/styles/l_1600_natural/public/kimsreizen-instagram-2132-ig-17954350378760829.jpg?itok=5_84dbq8',
      wishlist_id: ObjectId("37674etf98687687iuk798uoikj6772")
    }
  ]

  await Destinations.insertMany(wishlists)
  console.log('Created wishlists!')
}
const run = async () => {
  await addDestination();
  db.close()
}




run()