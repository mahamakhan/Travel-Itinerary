import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



const DestinationsDetails = () => {
    const [destinationsDetails, setDestinationsDetails] = useState({})
    let {id}= useParams()


    useEffect(() => {
       let selectedDestination=  async () => {
            const res = await axios.get(`http://localhost:3001/api${id}`)
            setDestinationsDetails(res.data)
            console.log(res)
        }
        selectedDestination()
    }, [])

    return destinationsDetails ? (
        <div className="detail" key={ destination._id }>
            <h4>City: { destination.city}</h4>
          <h3>Country: { destination.country }</h3>
          <h3>People: { destination.people }</h3>
          <h3>Departure: {destination.departure}</h3>
          <img src={destination.image} width='200px' height='140px' alt='city picture'/>
        </div>
      ) : null;
    }

export default DestinationsDetails