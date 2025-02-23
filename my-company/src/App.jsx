import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { useState } from "react";

function App(){
  return(
    <Router> 
      <Navbar/>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/About" element={<About/>}/>
        <Route path = "/Services" element={<Services/>}/>
        <Route path = "/Contact" element={<Contact/>}/>
      </Routes>
    </Router>
  
  )
}

export default App;