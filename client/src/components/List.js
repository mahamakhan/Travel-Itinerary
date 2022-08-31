import axios from 'axios'
import { useState, useEffect} from 'react';
import { useParams} from 'react-router-dom'



const List = ()=> {
    let {id}= useParams()
    const initialState = {
      city: '',
     country: '',
     people: '',
      departure:"",
      returndate:''
    }

    const [wishlist, setWishlist] = useState([])
    useEffect(() => {
      const getwishlists = async () => {
          let res = await axios.get(`http://localhost:3001/api/wish/wishlists`)
          setWishlist(res.data)
          
        }
      getwishlists()
    },[])
    const [formState, setFormState] = useState(initialState)
    
    //submit form
      const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await axios.post('http://localhost:3001/api/wish/newwishlist', wishlist)
        console.log('clicked', res)
        setFormState(initialState)
        
      };

      const handleChange = event => {
        
        setFormState({ ...formState, [event.target.id]: event.target.value });
      };
      const handleDelete= async (event) => {
        event.preventDefault();
        const res= await axios.delete(`http://localhost:3001/api/wish/wishlists/${id}`, wishlist)
         console.log('Delete successful',res);
        
        }
    return(




<section className="container-grid">
<div>
            
            
            <h1>Wishlist</h1>
          </div>
          
          <div className='form update'>
          <form onSubmit={handleSubmit}>
    <input type="text" id="city" onChange={handleChange} value={ wishlist.city } placeholder='City' />
    <input id="Type" placeholder='Type of trip' onChange={handleChange}/>
     
    <button type='submit'>Update</button>

      
    </form>
          </div>
          {wishlist
            ? wishlist.map((wishlist) => (
                <div key={wishlist._id}>
                  <h2>Type of trip:{wishlist.name}</h2>
                  <h2>City: {wishlist.city}</h2>
                  <button onClick={handleDelete}>Visited</button>
                </div>
              ))
            : (
              <h3>Vacation</h3>
              )}
        </section>

            )}
        export default List