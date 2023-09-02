import React from 'react'
import { GrFormNextLink } from "react-icons/gr";
import {BiArrowBack} from "react-icons/bi"

export default function Section4() {
  return (
    <div>
      <div className="container">
        <div className="row py-5">
            <div className="col-md-6 py-5">
                <img src="https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/about2.png" alt="" />
            </div>
            <div className="col-md-6 py-5">
            <h4 className='Card  size fs-2'>-------- WITH PATRICK POTTER</h4>
            <h1 className="fs  text-color">
              SAFE BODY BUILDING PROPER SOLUTIONS THAT SAVES OUR VALUABLE TIME!
            </h1> <p className="opacity fs-4">Brook presents your services with flexible, convefnient and chient <br /> anipurpose layouts. You can select your favorite layouts.Brook presents your services with flexible, convefnient and chient <br /> anipurpose layouts. You can select your favorite layouts.</p>
<br />
            <h1>JHON SMITH <span className='opacity fs-5'>GYM TRainer</span></h1>
<BiArrowBack  className="fs-2 text-danger  text-center"  />
            <GrFormNextLink  className="fs-1 text-white text-center" />
            </div>
        </div>
      </div>
    </div>
  )
}
