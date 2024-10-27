import React, {useRef } from "react";
import "../Contact/Contact.css";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";


function Contact() {
    const contactRef = useRef(null)
  return (
    <div className="container">
      <div className="contact_sec" ref={contactRef} id="contact">
        <div className="contact_cont">
          <div className="contact_heading">
            <h2>Find Me</h2>
          </div>

          <div className="contact_details">
            <div className="contact_links">
              <a href="https://www.linkedin.com/in/shehzad-hussain-683878209/" target="_blank" className="linkedin"> <FaLinkedin/></a>
              <a href="https://www.facebook.com/shezd.hussain.18?mibextid=ZbWKwL" target="_blank" className="facebook"><FaFacebook/></a>
              <a href="https://www.instagram.com/shezd18?igsh=MWplbGFwOG8xenE5bw==" target="_blank" className="insta"><FaInstagram/></a>
              <a href="https://profile.indeed.com/" target="_blank" className="indeed"><SiIndeed /> </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
