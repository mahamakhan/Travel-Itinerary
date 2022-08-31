import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const DestinationsDetail = () => {
    const [destinations, setDestinationsDetails] = useState({})
    
    let {id}= useParams()
    let navigate = useNavigate()
    const initialState = {
      city: '',
     country: '',
     people: '',
      departure:"",
      returndate:''
    }



    const [travel, settravel] = useState(initialState)
    
    //get one based to its id
    useEffect(() => {
       let selectedDestination=  async () => {
            const res = await axios.get(`http://localhost:3001/api/des/${id}`)
            setDestinationsDetails(res.data)
            console.log(res)
            
        }
        selectedDestination()
    }, [])


 


    //update function
    const handleUpdate = async (event) => {
      event.preventDefault()
      const res =await axios.put(`http://localhost:3001/api/des/${id}`, travel)
      console.log(res)
     }
     const handleChange = event => {
      settravel({ ...travel, [event.target.id]: event.target.value });
    };


    //delete function
     const handleDelete= async (event) => {
      event.preventDefault();
      const res= await axios.delete(`http://localhost:3001/api/des/${id}`, travel)
       console.log('Delete successful',res);
       navigate('/destinations')
      }

    return destinations ? (
      <div className="desdetail">
        <div>
          <img src={destinations.image} alt={destinations.city} width='1000px' height='614px'/>
            <h1>{destinations.country}</h1>
           </div>
        <div >
          <div>
            
            <h3>City: {destinations.city}</h3>
            <h3>Departure: {destinations.departure}</h3>
            <h3>Return Date: {destinations.returndate}</h3>
            <h3>Number of People: {destinations.people}</h3>
            
            <button onClick={handleDelete}>Delete</button>
          </div>
          
          <div className='form update'>
          <form onSubmit={handleUpdate}>
    <input type="text" id="city" onChange={handleChange} value={ travel.city } placeholder='City' />
    <input id="country" type="text" onChange={handleChange} value={ travel.country } placeholder='Country'/>
    <input id="image" type="text" onChange={handleChange} value={ travel.image } placeholder='Image'/>
    <input id="departure" type="date" onChange={handleChange} value={ travel.departure } placeholder='departure'/>
    <input id="returndate" type="date" onChange={handleChange} value={ travel.returndate } placeholder='Return date'/>
    <input id="people" type= "number" onChange={handleChange} value={ travel.people } placeholder='Number of poeple'/>
    <button type='submit'>Update</button>

      
    </form>
          </div>
          
        </div>
      </div>
    ) : null
  }

export default DestinationsDetail