import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import  Destinations from './components/Destinations';
import  Home from './components/Home';
import  Wishlist from './components/Wishlist';
import  Nav from './components/Nav';
// import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Route path="/" element={ <Home /> } />
      <Route path="Destinations" element={ <Destinations/>}/>
      <Route path="Wishlist" element={ <Wishlist/>}/> */}
      <Home/>
    </div>
  );
}

export default App;
