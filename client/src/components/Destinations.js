import axios from 'axios'
import { useState, useEffect } from 'react'

const BASE_URL = 'http://localhost:3001/api'
const Destinations= (props)=> {

  const [destination, setDestination] = useState([])
  // const [selectedMovie, setSelectedMovie] = useState(null)



// change console.log

  useEffect(() => {
    async function getDestinations() {
      const res = await axios.get(BASE_URL)
      setDestination(res.data.results)
    }
    getDestinations()
  }, [])

console.log(props.destinations)
    return(

        <div className='grid'>
            <h1> Destinations</h1>
            
        {/* {
            props.destinations.map((destinations) => (
            <div key={destinations.id} className="card">
             <img src={`${image}`} alt="poster" />
            <h3>{destinations.country}</h3>
            <h2>{destinations.city}</h2>
             <button>Delete</button>

            </div>
            ))
        } */}

        </div>
    )
}
export default Destinations;