import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const DestinationsDetail = () => {
    const [destinations, setDestinationsDetails] = useState({})
    const [formState, setFormState] = useState([])
    let {id}= useParams()
    let navigate = useNavigate()

    useEffect(() => {
       let selectedDestination=  async () => {
            const res = await axios.get(`http://localhost:3001/api/${id}`)
            setDestinationsDetails(res.data)
            console.log(res)
        }
        selectedDestination()
    }, [])

    const updatedestination = async (event) => {
      event.preventDefault()
      const res =await axios.put(`http://localhost:3001/api/${id}`, formState)
      console.log(res)
      navigate('/wishlist')
     }

     const deleteDestination= async (event) => {
      event.preventDefault();
      const res= await axios.delete(`http://localhost:3001/api/${id}`, formState)
       console.log('Delete successful',res);
       navigate('/destinations')
      }

    return destinations ? (
      <div className="desdetail">
        <div>
          <img src={destinations.image} alt={destinations.city} />
            <h1>{destinations.country}</h1>
           </div>
        <div >
          <div>
            
            <h3>City: {destinations.city}</h3>
            <h3>Departure: {destinations.departure}</h3>
            <h3>Return Date: {destinations.returndate}</h3>
            <h3>Number of People: {destinations.people}</h3>
            <button onClick={updatedestination}>Update</button>
            <button onClick={deleteDestination}>Delete</button>
          </div>
          
          
        </div>
      </div>
    ) : null
  }

export default DestinationsDetail