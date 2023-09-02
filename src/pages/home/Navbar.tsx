import { Link } from "react-router-dom";
import "./home.css";
import Button from "../../Components/Button/Button";

function Navbare() {
  return (
    <nav className="navbar navbar-expand-lg  bg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://preview.colorlib.com/theme/fitnessclub/assets/img/logo/logo.png"
            className=" px-5"
            alt=""
          />{" "}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  m-auto mb-2    mb-lg-0">
            <li className="nav-item py-3">
              <Link className="nav-link animations  fs-4 mx-3 " to="/">
                Home
              </Link>
            </li>
            <li className="nav-item py-3">
              <Link className="nav-link animations  fs-4 mx-3" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item py-3">
              <Link className="nav-link animations  fs-4 mx-3" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item py-3">
              <Link className="nav-link animations  fs-4 mx-3" to="/schedule">
                Schedule
              </Link>
            </li>
            <li className="nav-item py-3">
              <Link className="nav-link animations  fs-4 mx-3" to="/Gellry">
                Gellry
              </Link>
            </li>
            <li className="nav-item py-3">
              <Link className="nav-link animations  fs-4  mx-3" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item py-3">
              <Link className="nav-link animations  fs-4 mx-3" to="/contact">
                Contact
              </Link>
            </li>
         <li className="mx-5 Dsiplay my-3">
         <Button  />
         </li>



          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbare;
