import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { photo } from "../Data/Image";
import'./Navbar.css'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Navbar = () => {


  const hoverRef =useRef(null);



  useGSAP(()=>{
   var tml = gsap.timeline()
   tml.from(".logo img",{
    scale:0,
    opacity:0,
    duration:1,
    delay:0.3,
    ease: "elastic.out(1,0.3)"
    
   })
   tml.from(".menu a",{
    scale:0,
    opacity:0,
    duration:2.5,
    delay:0.4,
    stagger:0.3,
    ease: "elastic.out(1,0.3)",
   },"-=1")

  })

  const im = useContext(photo);
  console.log(im);
  return (
    <div id="navbar">
      <div className="logo">
        <img src={im[2].photo} alt="" />
      </div>

      <div className="menu" ref={hoverRef}>
        {" "}
        <Link to="/">
         
          Home 
        </Link>
        <Link to="/product"> Product </Link>
        <Link to="/service"> Projects </Link>
        <Link to="/about"> About </Link>
        <Link to="/Cart"><i className="ri-shopping-cart-line"></i></Link>
      </div>
    </div>
  );
};

export default Navbar;
