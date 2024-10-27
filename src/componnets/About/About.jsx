import React, { useEffect } from 'react'
import '../About/About.css'
import cv from '../Assests/cv.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
function About() {
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
    <div className='container'>
      <div className='about_sec'>
        <div className='about_cont'>
            <div className='about_heading'>
                <h2>Who I am</h2>
            </div>

            <div className='about_detail'>
                <div className='about_left' data-aos='flip-left'>
                    <img src={cv} alt='cv'/>
                </div>

                <div className='about_right' data-aos='flip-right'>
                    <h3>I am Shehzad Hussain</h3>
                    <p>A frontend web and UI developer with expertise in HTML, CSS, JavaScript, React.js, Bootstrap, UI, API integration, meterial UI and SQL. I have successfully built and maintained responsive and user-friendly web applications that meet clients' needs.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
