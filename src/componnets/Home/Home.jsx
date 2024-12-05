import React, { useEffect, useRef } from "react";
import "../Home/Home.css";
import Typewriter from "typewriter-effect";
import image from "../Assests/image.jpg";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import Aos from "aos";
import 'aos/dist/aos.css'
import logo from '../Assests/logo.png'
import { FaWhatsapp } from "react-icons/fa6";
import { MdAlternateEmail} from "react-icons/md";
function Home() {
  const homeRef = useRef(null);

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
  return (
    <div className="container">
      <div className="home_sec" ref={homeRef} id="home">
        <div className="home_left " data-aos='fade-right'>
          <p id="head">Frontend Developer and UI/UX Expert</p>
          <h3>Shehzad Hussain</h3>
          <div className="typewriter">
            <TbArrowBadgeRightFilled className="icon" />
            <p className="typewriterP">
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "React.js Expert",
                    "Frontend Developer",
                    "UI Developer",
                    "UI/UX Designer",
                    "Web Designer",
                    "Graphic Designer"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
          </div>
          <div className="whatsap_link">
            <p className="whtsp"> <FaWhatsapp className="whatsapp"/> +923060096289</p>
            </div>

            <div className="email">
           <MdAlternateEmail className="whatsapp"/>
          <a href="mailto:shezd18@gmail.com">shezd18@gmail.com</a>
            {/* <p className="whtsp"> <MdAlternateEmail className="whatsapp"/> </p> */}
            </div>
        </div>
        <div className="home_right" data-aos='fade-left' >
          <img src={image} className="picture" alt="shehzadimage" />
          <div className="home_right_details">
            <img src={logo} alt="logo"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
