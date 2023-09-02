import React from 'react'
import "./Services.css"
import Navber from "../../pages/home/Navbar"

import { Navbar } from 'react-bootstrap'
import Section5 from '../home/Section5'
import Fotter from '../../Components/Fotter/Fotter'
export default function Services() {
  return (
    <>
    <div className='main__div'>
      <Navber />

      <div>
        <h1 className=' text-white text-center my-5'>SERVICES___OUR</h1>
      </div>
    </div>
    
    <Section5 />
    <hr />
    <Fotter />
    </>
  )
}
