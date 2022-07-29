import axios from 'axios'
import { useState} from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Wishlist = ()=> {

    const initialState = {
      city: '',
     country: '',
     people: '',
      departure:"",
      returndate:''
    }
    const [formState, setFormState] = useState(initialState)
    let navigate = useNavigate()
    
    const handleChange = event => {
      setFormState({ ...formState, [event.target.id]: event.target.value });
    };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await axios.post('http://localhost:3001/api/wishlist', formState)
        console.log(res)
        setFormState();
        navigate('/destinations')
      };

     

    return(

        <div>
   <form onSubmit={handleSubmit}>
   <label htmlFor="tripType">Type of trip:</label>
    <select id="tripType" onChange={handleChange} value={ formState.type }>
      <option value="work">Work</option>
      <option value="visit-family">Visit Family</option>
      <option value="leisure">Leisure</option>
    </select>
    <label htmlFor="city">City:</label>
    <input type="text" id="city" onChange={handleChange} value={ formState.city }/>
    <label htmlFor="country">Country</label>
    <input id="country" type="text" onChange={handleChange} value={ formState.country }/>
    <label htmlFor="departure">Departure:</label>
    <input id="departure" type="date" onChange={handleChange} value={ formState.departure }/>
    <label htmlFor="returndate">Return date:</label>
    <input id="return" type="date" onChange={handleChange} value={ formState.returndate }/>
    <label htmlFor="people">Number of people:</label>
    <input id="people" type= "number" onChange={handleChange} value={ formState.people }/>
    <button type="submit" >Enter</button>
    <button><Link to="/destinations">Destinations</Link></button>
      
    </form>
   
        </div>
    )
}

export default Wishlist;