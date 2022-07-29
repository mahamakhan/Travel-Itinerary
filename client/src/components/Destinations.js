import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import Wishlist from './Wishlist'
// import DestinationsDetails from './DesDetails'
// import DestinationsList from './Deslist'


const BASE_URL = 'http://localhost:3001/api'
const Destinations= (props)=> {

 
  const [destinations, setdestinations] = useState([])
  useEffect(() => {
    const getdestinations = async () => {
        let res = await axios.get(BASE_URL)
        setdestinations(res.data)
      }
    getdestinations()
  }, [])

console.log(props)



let navigate = useNavigate()
const showDes = (id) => {
  navigate(`${id}`)
}



  // deleteDestination();


    return(

        <div>
            <h1> Destinations</h1>
            <section className="grid"> 

      { destinations ? destinations.map((destination) => (
        <div key={ destination._id }>
          <h2>Country: { destination.country }</h2>
          <button onClick={() => showDes(destination._id)}>Show Details</button>
          <img src={destination.image} width='200px' height='140px' alt='city'/>
          
          </div>
      )) : ""}
      </section>
      
        </div>
    )
}

export default Destinations;