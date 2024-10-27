import React, { useRef } from "react";
import "../Navbar/Navbar.css";
function Navbar() {

  const homeRef = useRef(null);
  const contactRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const experinceRef = useRef(null);

  const scrollToSection = (ref) => 
  {
    if(ref && ref.current){

    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth"
    })
  }
  }
  return (
    <div className="container">
      <div className="Nav-cont ">
        <div className="nav-logo">
          <p>{ "< Shehzad />" }</p>
        </div>
        <div className="nav-links">
          <ul>
            <li><a href="#home" onClick={()=>scrollToSection(homeRef)}>Home</a></li>
            <li><a href="#skills" onClick={()=>scrollToSection(skillRef)}>Skills</a> </li>
            <li><a href="#experince" onClick={()=>scrollToSection(experinceRef)}>Experince</a> </li>
            <li> <a href="#projects" onClick={()=>scrollToSection(projectRef)}>Projects</a></li>
            <li> <a href="#contact" onClick={()=>scrollToSection(contactRef)}>Contact</a></li>
          </ul>
        </div>

        <div className="hambarger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
