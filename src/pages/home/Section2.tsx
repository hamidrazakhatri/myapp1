import React from "react";
import Button from "../../Components/Button/Button";

export default function Section2() {
  return (
    <div className="bg-ligth h-100">
      <div className="contianer py-5 px-3">
        <div className="row">
          <div className="col-md-6 p-5 ">
            <img
              src="https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/about.png"
              alt=""
            />
          </div>
          <div className="col-md-6 p-5">
            <h4 className="Card  size  fs-1">-------- ABOUT OUR GYM</h4>
            <h1 className="fs  text-color">
              SAFE BODY BUILDING PROPER SOLUTIONS THAT SAVES OUR VALUABLE TIME!
            </h1>
            <br />
            <br />
            <p className="fs-5">
              Brook presents your services with flexible, convenient and cdpose
              layouts. <br /> You can select your favorite layouts & elements for cular
              ts with unlimited <br /> ustomization possibilities. Pixel-perfect
              replication of the designers is <br /> intended.
            </p><br />
            <p className="opacity fs-4">Brook presents your services with flexible, convefnient and chient <br /> anipurpose layouts. You can select your favorite layouts.</p>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}
