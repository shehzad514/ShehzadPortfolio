import React, {useEffect, useRef } from "react";
import "../Projects/Projects.css";
import travel from '../Assests/travel.png'
import shopping from '../Assests/shopping.png'
import tourism from '../Assests/tourism.png'
import bank from '../Assests/bank.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Projects() {

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
    const projectRef = useRef(null)
  return (
    <div className="container">
      <div className="project_sec" ref={projectRef} id="projects">
        <div className="project_cont">
          <div className="project_heading">
            <h2>My Projects</h2>
          </div>

          <div className="project_details">
            <div className="online_banking" >
              <div className="online_banking_pic" data-aos='flip-right'>
                <img src={bank} alt="OnlineBank"/>
              </div>
              <div className="online_banking_details" data-aos='fade-left'>
                <h3>Online Bank System</h3>
                <p>This project is develop in React js </p>
                <ul>
                    <li>Different types of Accounts</li>
                    <li>Different types of Cards</li>
                    <li>Balance transaction from one account to another</li>
                    <li>Users Dashboards</li>
                    <li>SMS Alerts when transaction complete</li>
                </ul>

                <button className="btn">View Project</button>
              </div>
            </div>


            <div className="shopping_center">
            <div className="shopping_center_pic" data-aos='flip-left'>
                <img src={shopping} alt="shooping"/>
              </div>
              <div className="online_banking_details" data-aos='fade-right'>
                <h3>Shopping Center</h3>
                <p>This project is develop in React js </p>
                <ul>
                    <li>Different types of Products</li>
                    <li>Add to cart system</li>
                    <li>Different types of categories</li>
                    <li>Fully responsive</li>
        
                </ul>

                <button className="btn">View Project</button>
              </div>
            </div>


            <div className="tourism">
            <div className="tourism_pic" data-aos='flip-right'>
                <img src={tourism} alt="tourism"/>
              </div>
              <div className="online_banking_details" data-aos='fade-left'>
                <h3>Tourism</h3>
                <p>This project is develop in React js</p>
                <ul>
                    <li>Tour to Dubai</li>
                    <li>Different types of Tourist Guider</li>
                    <li>Booking Tickets and Resturents</li>
                    <li>Users Dashboards</li>
                    <li>Different activities in dubai</li>
                </ul>

                <button className="btn">View Project</button>
              </div>


            </div>
            <div className="travelling">
            <div className="travel_pic" data-aos='flip-left'>
                <img src={travel} alt="travelling"/>
              </div>
              <div className="online_banking_details" data-aos='fade-right'>
                <h3>Travel with us</h3>
                <p>This project is develop in React js</p>
                <ul>
                    <li>Different countries trips</li>
                    <li>Different types of discounts</li>
                    <li>Booking tickets</li>
                    <li>Booking hotels & resturents</li>
                    <li>Different travelling ways</li>
                </ul>

                <button className="btn">View Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
