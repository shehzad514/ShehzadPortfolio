import React, { useEffect,useRef } from "react";
import "../Experince/Experince.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Aos from 'aos'
import 'aos/dist/aos.css'
function Experince() {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 510) {
        Aos.init({ duration: 3000 });
      } else {
        Aos.init({ disable: true });
        Aos.refreshHard(); // Force AOS to re-evaluate and disable
      }
    };

    handleResize(); // Run initial check
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      Aos.refresh(); // Reset AOS when component unmounts
    };
  }, []);
    const experinceRef = useRef(null)
  return (
    <div className="container">
      <div className="exp_sec" ref={experinceRef} id="experince">
        <div className="exp_cont">
          <div className="exp_heading">
            <h2>Experince & Certificates</h2>
          </div>

          <div className="exp_details">
            <div className="exp_left" data-aos='zoom-in-right'>
              <h2>Web Developer Intern</h2>
              <p>NAXAPE</p>
              <ul>
                <li>Improve web development skills, especially in React JS</li>
                <li>
                  Designed user-friendly UI/UX elements, improving website
                  navigation and layout
                </li>
                <li>Developed responsive websites using React JS</li>
                <li>Develop User friendly UI</li>
                <li>Develop project Online Banking Sysytem in react js</li>
              </ul>
            </div>
            
            <div className="exp_middle">
            <FaArrowAltCircleRight className="dots dota"/>
                <FaArrowAltCircleLeft className="dots dotb"/>
                <FaArrowAltCircleRight className="dots dotc"/>
            </div>
            <div className="exp_right">
            <div className="cert_up" data-aos='fade-down'>
              <h2>Freelancing</h2>
              <p>
                I completed this training course under DigiSkills Training
                program Batch-09 Feb 2021-May 2021
              </p>
              <ul>
                <li>Client communication</li>
                <li>Project Management</li>
                <li>Time Management</li>
                <li>Bidding techniques</li>
                <li>Handling Contracts</li>
              </ul>
              </div>
              

              <div className="cert_below" data-aos='zoom-in-left'>
              <h2>Graphic Design</h2>
              <p>
                I completed this training course under DigiSkills Training
                program Batch-09 Feb 2021-May 2021
              </p>
              <ul>
                <li>UI/UX Design</li>
                <li>Figma</li>
                <li>Adobe xd</li>
                <li>canva</li>
                <li>Adobe Photoshop</li>
                <li>Typography</li>
                <li>Design Principals</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experince;
