import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Wishlist from './Wishlist'
// import DestinationsDetails from './DesDetails'
// import DestinationsList from './Deslist'


const BASE_URL = 'http://localhost:3001/api'
const Destinations= (props)=> {
  let {id}= useParams()
    
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


const deleteDestination= async () => {
  let res= await axios.delete(`http://localhost:3001/api/${id}`, formstate)
   console.log('Delete successful');
   
  }
  // deleteDestination();


    return(

        <div>
            <h1> Destinations</h1>
            <section className="grid"> 

      { destinations ? destinations.map((destination) => (
        <div key={ destination._id } >
          <h4>City: { destination.city}</h4>
          <h3 >Country: { destination.country }</h3>
          <h3>People: { destination.people }</h3>
          <h3>Departure: {destination.departure}</h3>
          <img src={destination.image} width='200px' height='140px'/>
          <button onClick={() => showDes(destination._id)}>Show Details</button>
          <button onClick={() => deleteDestination}>Delete</button>
          </div>
      )) : ""}
      </section>
      
        </div>
    )
}

export default Destinations;