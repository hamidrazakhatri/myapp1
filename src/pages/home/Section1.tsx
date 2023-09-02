import React from 'react'
import "./home.css"; 
import Button from '../../Components/Button/Button';
import {BiSolidVideos} from 'react-icons/bi'


export default function Section1() {
  return (
   <>
   <div className="container p-5 my-5">
    <div className="row">
      <div className="col-md-6  ">
        <h4 className='Card  size fs-2'>-------- WITH PATRICK POTTER</h4>
        <h1 className='text-white fw-bold fs'>BUILD PERFECT BODY SHAPE FOR GOOD AND   HEALTHY LIFE...
        BUILD PERFECT BODY SHAPE FOR GOOD...</h1>
        <div  className='display'>
        <Button  />
        </div>

      </div>

      <div className="col-md-4 ">

      </div>
    </div>
   </div>
   </>
  )
}
