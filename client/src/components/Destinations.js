import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


// all destinations


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



    return(

        <div className='alldestinations'>
            <h1> Destinations</h1>
            <section className="grid"> 

      { destinations ? destinations.map((destination) => (
        <div key={ destination._id }>
          <figure>
          <img className="alldesimg" src={destination.image} width='300px' height='214px' alt='city'/>
          <figcaption className='figcap'>Country: { destination.country }</figcaption>
          </figure>
          <button onClick={() => showDes(destination._id)}>Show Details</button>
          
          </div>
      )) : ""}
      </section>
      
        </div>
    )
}

export default Destinations;