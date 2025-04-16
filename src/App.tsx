import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Collection from './pages/Collection';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Homepage from './pages/HomePage';
import CountrySelector from './pages/FindYourCountry';

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
     <div className='container w-100'>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}  />
        <Route path="/find-your-country" element={<CountrySelector />} />
        <Route path="/collections/:slug" element={<Collection />} />
      </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
