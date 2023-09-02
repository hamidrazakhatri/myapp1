import React from "react";
import { GiGymBag } from "react-icons/gi";
import Button from "../../Components/Button/Button";
import { GrFormNextLink } from "react-icons/gr";
import {BsFillArrowThroughHeartFill} from "react-icons/bs"
import {FaHandHoldingHeart} from 'react-icons/fa'

export default function () {
  return (
    <div className="Background___img">
      <div className="container">
        <div className="row">
          <div className="col-md-6 px-5 p-5 ">
            <h4 className="Card  size fs-2">-------- WITH PATRICK POTTER</h4>
            <h1 className="text-white fw-bold fs">
              PUSH YOUR LIMITS FORWARD <br /> WE OFFER TO YOU
            </h1>
          </div>
          <div className="col-md-4 "><br /><br /><br /><br />
          <br /><br /><br />


            <Button />
          </div>
         
        </div>
      </div>

      <div className="container">
        <div className="row ">
          <div className="col-md-4 py-2 ">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <GiGymBag className="fs-1 text-white " />
                  <h3 className="py-3 text-white">Quilaty EQYUIPMENT</h3>
                  <p className="opacity p-3 text-white">
                    The sea freight service has grown consider ably in recent
                    years. We spend timetting to kn.
                  </p>
                </div>
                <div className="flip-card-back">
                  <h3 className="py-5 tex-center">
                    DSICOVER MORE <br /> About-us
                  </h3>

                  <GrFormNextLink className="fs-1 text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-2 ">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <BsFillArrowThroughHeartFill className="fs-1 text-white " />
                  <h3 className="py-3 text-white">HEALTHY CARING</h3>
                  <p className="opacity p-3 text-white">
                  The sea freight service has grown consider ably in recent years. We spend timetting to kn.
                  </p>
                </div>
                <div className="flip-card-back">
                  <h3 className="py-5 tex-center">
                    DSICOVER MORE <br /> About-us
                  </h3>

                  < GrFormNextLink className="fs-1 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 py-2 ">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <FaHandHoldingHeart className="fs-1 text-white " />
                  <h3 className="py-3 text-white">GYM STARATEGIES</h3>
                  <p className="opacity p-3 text-white">
                    The sea freight service has grown consider ably in recent
                    years. We spend timetting to kn.
                  </p>
                </div>
                <div className="flip-card-back">
                  <h3 className="py-5 tex-center">
                    DSICOVER MORE <br /> About-us
                  </h3>

                  <GrFormNextLink className="fs-1 text-white" />
                </div>
              </div>
            </div>
          </div>
x
      
        </div>
      </div>
    </div>
  );
}
