import { useState, useEffect } from 'react'
import axios from 'axios'
// import DestinationsDetails from './DesDetails'
// import DestinationsList from './Deslist'


const BASE_URL = 'http://localhost:3001/api'
const Destinations= (props)=> {
  //   const [destinations, setDestination] = useState([])
  //   const [selectedDestinations, setSelectedDestinations] = useState(null)
  
  //   useEffect(() => {
  //     async function getDestinations() {
  //       const res = await axios.get(BASE_URL)
  //       setDestination(res.data.results)
  //     }
  //     getDestinations()
  //   }, [])
  
  //   const getDestinations = (destinationsId) => {
  //     console.log(destinationsId)
  //     setSelectedDestinations(destinationsId)
  //   }
  
  // let component 
  
  //   if (selectedDestinations) {
  //     component = <DestinationsDetails selectedDestinations={ selectedDestinations } />
  //   } else {
  //     component = <DestinationsList destinations={destinations} getDestinations={ getDestinations } />
  //   }
    
  const [issues, setIssues] = useState([])
  useEffect(() => {
    const getIssues = async () => {
      try {
        let res = await axios.get(BASE_URL)
        setIssues(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    getIssues()
  }, [])
console.log(props.destinations)
    return(

        <div className='grid'>
            <h1> Destinations</h1>
            
      { issues.map((issue) => (
        <div key={ issue._id }>
          <h3>City: { issue.city}</h3>
          <p>Country: { issue.country }</p>
          <p>People: { issue.people }</p>
          <img src='{issue.image}'/>
          </div>
      ))}
      
        </div>
    )
}
export default Destinations;