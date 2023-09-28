import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar';
import Product from './Component/Product';
import About from './Component/About';
import Contact from './Component/Contact';
import Admin from './Component/Admin';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Charteringvessels from './Component/Charteringvessels';
import Crewmanagement from './Component/Crewmanagement';
import Owningvessels from './Component/Owningvessels';
import Salespurchase from './Component/Salespurchase';
import Technicalmanagements from './Component/Technicalmanagements';
import Touge from './Component/Touge';
import Getaquote from './Component/Getintouch/Getaquote';
import Generalenquiry from './Component/Getintouch/Generalenquiry';

function App() {
  return (
    <><Router>
      <Navbar/>
      <Routes>
          <Route>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/product" element={<Product/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/admin" element={<Admin/>} />
          <Route exact path="/crewmanagement" element={<Crewmanagement/>} />
          <Route exact path="/Charteringvessels" element={<Charteringvessels/>} />
          <Route exact path="/owningvessels" element={<Owningvessels/>} />
          <Route exact path="/salespurchase" element={<Salespurchase/>} />
          <Route exact path="/technicalmanagements" element={<Technicalmanagements/>} />
          <Route exact path="/touge" element={<Touge/>} />
          <Route exact path="/getaquote" element={<Getaquote/>} />

          <Route exact path="/generalenquiry" element={<Generalenquiry/>} />






          </Route>
      </Routes>
      <Footer/>
    </Router>
       
    </>
  );
}

export default App;
