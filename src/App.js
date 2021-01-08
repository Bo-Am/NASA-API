import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <div className='app'>
      <Route path='/' exact component={Home} />
      <Route path='/nasaphoto' component={NasaPhoto} />
    </div>
    </BrowserRouter>
  );
}

export default App;
