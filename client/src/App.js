import React from 'react';
import './App.css';
import  Destinations from './components/Destinations';
import  Home from './components/Home';
import  Wishlist from './components/Wishlist';
import Navbar from './components/Nav';
import { Routes, Route } from 'react-router-dom'
import DestinationsDetail from './components/DesDetails';



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
      <Route path="/destinations/:id" element={<DestinationsDetail/>}/>
      <Route path="/wishlist" element={ <Wishlist/>}/>
      </Routes>
      </main>
      
      
    </div>
  );
}

export default App;
