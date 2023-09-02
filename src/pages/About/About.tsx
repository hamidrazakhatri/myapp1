import React from 'react'
import "./About.css"
import Navber from "../../pages/home/Navbar"
// import './home.css'
import { Navbar } from 'react-bootstrap'
import Section2 from '../home/Section2'
import Section4 from '../home/Section4'
import Fotter from '../../Components/Fotter/Fotter'
export default function About() {
  return (
 <>
    <div className='main__div'>
    <Navber />

    <div>
      <h1 className='text-white fw-bold text-center py-5 fs-1'> About__Us</h1>
    </div>
    </div>
    <Section2/>
    <hr />
    <Section4 />
    <Fotter />
 </>


  )
}
