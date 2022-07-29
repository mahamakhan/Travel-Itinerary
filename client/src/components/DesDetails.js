import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'




const DestinationsDetail = () => {
    const [destinations, setDestinationsDetails] = useState({})
    let {id}= useParams()


    useEffect(() => {
       let selectedDestination=  async () => {
            const res = await axios.get(`http://localhost:3001/api/${id}`)
            setDestinationsDetails(res.data)
            console.log(res)
        }
        selectedDestination()
    }, [])

    return destinations ? (
      <div className="desdetail">
        <div>
          <img src={destinations.image} alt={destinations.city} />
            <h1>{destinations.country}</h1>
           </div>
        <div >
          <div>
            <h3>Country: {destinations.country}</h3>
            <h3>City: {destinations.city}</h3>
          </div>
          <p>{destinations.departure}</p>
        </div>
      </div>
    ) : null
  }

export default DestinationsDetail