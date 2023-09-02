import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../../pages/home/Home';
import About from '../../pages/About/About';
import Services from '../../pages/Services/Services';
import Schedule from '../../pages/Shedule/Schedule';
import Gellry from '../../pages/Gellary/Gellry';
import Blog from '../../pages/Blog/Blog';
import Contact from '../../pages/Contact/Contact';
export default function Router() {
  return (
    <div>
      <BrowserRouter>


      
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/services' element={<Services/>}/>
        <Route  path='/schedule' element={<Schedule/>}/>
        <Route  path='/gellry' element={<Gellry/>}/>
        <Route  path='/blog' element={<Blog/>}/>
        <Route  path='/contact' element={<Contact/>}/>




        

      </Routes>
      
      </BrowserRouter>
    </div>
  )
}
