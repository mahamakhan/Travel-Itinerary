import React from 'react'
import { Link } from 'react-router-dom'


const Navbar= ()=> {

    return(
<nav className='navbar'>
        <div>
        
        <Link to="/">   Home    </Link>
        <Link to="/destinations">  Destinations    </Link>  
        <Link to="/wishlist">   Wishlist</Link> 
        </div>
    </nav>
    )
}

export default Navbar;