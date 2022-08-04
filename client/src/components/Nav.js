import React from 'react'
import { Link } from 'react-router-dom'


const Navbar= ()=> {

    return(
<nav className='navbar'>
        <div className='nav'>
        
        <Link to="/" style={{ marginRight: 20 }}>   Home    </Link>
        <Link to="/destinations" style={{ marginRight: 20 }}>  Destinations    </Link>  
        <Link to="/wishlist" style={{ marginRight: 20 }}  >   Add and Update Destinations</Link> 
        <Link to="/list" style={{ marginRight: 20 }} > Wishlist</Link>
        </div>
    </nav>
    )
}

export default Navbar;