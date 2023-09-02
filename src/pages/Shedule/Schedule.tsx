import React from 'react'
import "./Shedule.css"
import Navbare from '../home/Navbar'
import Fotter from '../../Components/Fotter/Fotter'
import Section4 from '../home/Section4'
export default function Schedule() {
  return (
    <>
    <div className='main__div'>
      <Navbare/>

      <div>
        <h1 className='text-white text-center  my-5'>Schedule</h1>
      </div>
      
    </div>

    <Section4 />
    <Fotter />
    </>
  )
}
