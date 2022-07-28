import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



const DestinationsDetails = (props) => {
    const [destinationsDetails, setDestinationsDetails] = useState({})
    let {id}= useParams()


    useEffect(() => {
       let selectedDestination=  async () => {
            const res = await axios.get(`http://localhost:3001/api/${id}`)
            setDestinationsDetails(res.data)
            console.log(res)
        }
        selectedDestination()
    }, [])

    return destinationsDetails ? (
        <div className="detail">
          <div className="detail-header">
            <img src={destinations.img} alt={destinations.name} />
            <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <h1>{destinations.name}</h1>
            </div> 
          </div>
          <div className="info-wrapper">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <h3>Price: ${destinations.price}</h3>
              <h3>destinations ID: {destinations.id}</h3>
            </div>
            <p>{destinations.description}</p>
          </div>
        </div>
      ) : null;
    }

export default DestinationsDetails