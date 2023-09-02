import React from 'react'
import "./Fotter.css"
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
// import "../../pages/home/home."
export default function Fotter() {
  return (
  <>
    <div className='Fotter'>
      <div className='End___fotter'>
     <div className="container">
        <div className="row">
            <div className="col-md-3 my-5">
                <h1 className='text-white '>COMPANY</h1>
                <p className='text-white opacity'>About Us</p>
                <p className='text-white opacity'>Company</p>
                <p className='text-white opacity'>Press & Blog</p>
                <p className='text-white opacity'>Privacy Policy</p>
            </div>

            <div className="col-md-3 my-5">
                <h1 className='text-white '>OPEN HOUR</h1>
                <p className='text-white opacity'> Monday 11am-7pm</p>
                <p className='text-white opacity'>Tuesday-Friday 11am-8pm</p>
                <p className='text-white opacity'>Saturday 10am-6pm</p>
                <p className='text-white opacity'>Sunday 11am-6pm</p>
            </div>


            <div className="col-md-3 my-5">
                <h1 className='text-white fs-4 '>RESOURCES</h1>
                <p className='text-white fs-4 opacity' >Home Insurance</p>
                <p className='text-white fs-4 opacity'>Travel Insurance</p>
                <p className='text-white fs-4 opacity'>  Car Insurance</p>
                <p className='text-white fs-4 opacity'>Business Insurance</p>
                <p className='text-white fs-4 opacity'>Heal Insurance</p>


            </div>

            <div className="col-md-3 my-5">
                <h1 className='text-white '><img src="https://preview.colorlib.com/theme/fitnessclub/assets/img/logo/logo.png" alt="" /></h1>
              <p className='fs-4 text-white opacity'>GThe trade war currently ensuing between te US anfd several natxions around thdhe globe, most fiercely with.</p>
              <BsFacebook className='fs-3 mx-3 text-white'  />
              <AiFillTwitterCircle className='fs-2  mx-3 text-white'   />
              <AiFillInstagram className='fs-2 mx-3 text-white'  />
              <AiFillLinkedin className='fs-2 mx-3 text-white' />
              

            </div>
            <hr  className='text-white'/>
            <p className='text-white text-center'>Copyright ©2023 All rights reserved | This template is made with  by Colorlib</p>
        </div>
     </div>
        </div>  
      
        </div>
  </>
  )
}
