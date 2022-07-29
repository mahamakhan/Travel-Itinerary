import axios from 'axios'
import { useState} from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Wishlist = ()=> {
  let navigate = useNavigate()
    const initialState = {
      city: '',
     country: '',
     people: '',
      departure:"",
      returndate:''
    }


    const [formState, setFormState] = useState(initialState)
    
    //submit form
      const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await axios.post('http://localhost:3001/api/wishlist', formState)
        console.log('clicked', res)
        setFormState(initialState)
        navigate('/destinations')
      };

      const handleChange = event => {
        setFormState({ ...formState, [event.target.id]: event.target.value });
      };

    return(

        <div className='form wishlist'>
   <form onSubmit={handleSubmit}>
       <label htmlFor="city">City:</label>
    <input type="text" id="city" onChange={handleChange} value={ formState.city }/>

    <label htmlFor="country">Country:</label>
    <input id="country" type="text" onChange={handleChange} value={ formState.country }/>

    <label htmlFor="image">Image Link: </label>
    <input id="image" type="text" onChange={handleChange} value={ formState.image }/>

    <label htmlFor="departure">Departure:</label>
    <input id="departure" type="date" onChange={handleChange} value={ formState.departure }/>

    <label htmlFor="returndate">Return date:</label>
    <input id="returndate" type="date" onChange={handleChange} value={ formState.returndate }/>

    <label htmlFor="people">Number of people:</label>
    <input id="people" type= "number" onChange={handleChange} value={ formState.people }/>

    <button type="submit"  >Enter</button>

    <button><Link to="/destinations">Destinations</Link></button>
      
    </form>
   
        </div>
    )
}

export default Wishlist;