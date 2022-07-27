import logo from './logo.svg';
import './App.css';
import { Destinations, Wishlist, Home } from './Components';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Destinations/>
      <Home/>
      <Wishlist/>
    </div>
  );
}

export default App;
