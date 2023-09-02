import React from "react";
import { Link } from "react-router-dom";
import Navbare from "./Navbar";
import "./home.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Fotter from "../../Components/Fotter/Fotter";

export default function Home() {
  return (
    <>
    <div className="main___div">
      <Navbare />
      <Section1 />
 </div>
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Fotter />
    </>
    
  );
}
