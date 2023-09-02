import React from 'react'
import "./Blog.css"
import Navbare from '../home/Navbar'
import Fotter from '../../Components/Fotter/Fotter'
import Section3 from '../home/Section3'
export default function Blog() {
  return (
    <>
    <div className='main__div'>
      <Navbare/>

      <div>
        <h1 className='text-white text-center  my-5'>BLOG</h1>
      </div>
      
    </div>

    <Section3 />
    <Fotter />
    </>
  )
}
