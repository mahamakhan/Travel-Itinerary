import React from 'react';
import { useEffect } from 'react'; 
import axios from 'axios'
 
import ReactDOM from 'react-dom/client';
import './App.css';
import  Destinations from './components/Destinations';
import  Home from './components/Home';
// import  Wishlist from './components/Wishlist';


import Navbar from './components/Nav';
import { Routes, Route } from 'react-router-dom'

function App() {


const BASE_URL = 'http://localhost:3001/api'

  useEffect(() => {
    async function getDestinations() {
      const res = await axios.get(BASE_URL)
      console.log(res)
    }
    getDestinations()
  }, [])





  return (
    <div className="App">
      {/* <Route path="/" element={ <Home /> } />
      <Route path="/destinations" element={ <Destinations/>}/>
      <Route path="/wishlist" element={ <Wishlist/>}/> */}
      <Navbar/>
      <Home/>
      
    </div>
  );
}

export default App;
