import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Wishlist from './Wishlist'
// import DestinationsDetails from './DesDetails'
// import DestinationsList from './Deslist'


const BASE_URL = 'http://localhost:3001/api'
const Destinations= (props)=> {

    
  const [destinations, setdestinations] = useState([])
  useEffect(() => {
    const getdestinations = async () => {
      try {
        let res = await axios.get(BASE_URL)
        setdestinations(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    getdestinations()
  }, [])
console.log(props.destinations)

// const deleteDestination= async () => {
//   let res = await axios.delete(`BASE_URL/${id}`, formstate)
//   navigate('/destinations')

// }

let navigate = useNavigate()
const showDes = (id) => {
  navigate(`destinations/${id}`)
}
    return(

        <div className='grid'>
            <h1> Destinations</h1>
            
      { destinations.map((destination) => (
        <div key={ destination._id } onClick={() => showDes(destination._id)}>
          <h4>City: { destination.city}</h4>
          <h3>Country: { destination.country }</h3>
          <h3>People: { destination.people }</h3>
          <h3>Departure: {destination.departure}</h3>
          <img src={destination.image} width='200px' height='140px'/>
          <button >Delete</button>
          </div>
      ))}
      
        </div>
    )
}
export default Destinations;