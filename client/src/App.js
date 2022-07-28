import React from 'react';
// import ReactDOM from 'react-dom/client';
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

import  Destinations from './components/Destinations';
import  Home from './components/Home';
import  Wishlist from './components/Wishlist';
import Navbar from './components/Nav';
import { Routes, Route } from 'react-router-dom'




const App= ()=> {
  







  return (
    <div className="App">
      <header>
        <Navbar/>
      
      </header>
      <main>
      <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/destinations" element={ <Destinations/>}/>
      <Route path="/wishlist" element={ <Wishlist/>}/>
      </Routes>
      </main>
      
      
    </div>
  );
}

export default App;
