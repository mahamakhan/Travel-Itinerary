import axios from 'axios'
import { useState } from 'react';

const Wishlist= (props)=> {

    const initialState = {
      city: '',
     country: '',
     people: ''

    }

    const [formState, setFormState] = useState(initialState)
    const handleChange = event => {
        setFormState({ ...formState, [event.target.id]: event.target.value });
      };
      
      const handleSubmit = async (event) => {
        event.preventDefault();
        let res = await axios.post('http://localhost:3001/api/wishlist', formState)
        console.log(res)
        setFormState(initialState);
      };
    return(

        <div>
   <form onSubmit={handleSubmit}>
   <label htmlFor="tripType">Type of trip:</label>
    <select id="tripType" onChange={handleChange}>
      <option value="work">Work</option>
      <option value="visit-family">Visit Family</option>
      <option value="leisure">Leisure</option>
    </select>
    <label htmlFor="city">City:</label>
    <input type="text" id="city" onChange={handleChange}/>
    <label htmlFor="coutry">Coutry</label>
    <input id="coutry" type="text" onChange={handleChange}/>
    <label htmlFor="departure">Departure:</label>
    <input id="departure" type="date" onChange={handleChange}/>
    <label htmlFor="returndate">Return date:</label>
    <input id="return" type="date" onChange={handleChange}/>
    <label htmlFor="people">Number of people:</label>
    <input id="dpeople" type= "number" onChange={handleChange}/>
    <button type="submit">Send</button>
      <button>Submit</button>
    </form>
            
        </div>
    )
}

export default Wishlist;