import React from "react";

export default function Section6() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 p-0">
            <img
              src="https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/contact_form.png"
              width="100%"
              alt=""
            />
          </div>
          <div className="col-md-6 my-5  p-3">
            <h4 className="Card  size f">-------- CONTACT FORM</h4>
            <h1 className="text-color  fw-bold ">
              FEEL FREE TO CONTACT <br /> WITH US!
            </h1>

            <form action="">
              <input
                type="text"
                name=""
                className="Input "
                placeholder="NAME"
                id=""
              />
              <input
                type="text"
                name=""
                className="Input "
                placeholder="PHONE"
                id=""
              /> <br /> <br />
              <select className="Input opacity fw-bold" placeholder="" name="" id="">
                <option value=""  >Saiful Islam</option>
                <option value="" >Arfath Miya</option>
                <option value="" >Shakil Miya</option>
                <option value="" >Tamim Sharker</option> </select>
                <input
                type="text"
                name=""
                className="Input "
                placeholder="Email"
                id=""
              /> <br /><br />
              <textarea name="" className="Textarea mx-3" placeholder="MASSAGE" id=""  ></textarea>
              <button className="button mx-3 my-3">SEND MSG</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
