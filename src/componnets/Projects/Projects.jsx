import React, { useEffect, useRef, useState } from "react";
import "../Projects/Projects.css";
import travel from "../Assests/travel.png";
import shopping from "../Assests/shopping.png";
import tourism from "../Assests/tourism.png";
import bank from "../Assests/bank.png";
import Aos from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Projects() {

  const [mobileview, setMobileview] = useState(false)
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 510) {
        Aos.init({ duration: 3000 });
      } else {
        Aos.init({ disable: true });
        Aos.refreshHard(); // Force AOS to re-evaluate and disable
      }
    };

    const handlewidth =()=>
    {
      if(window.innerWidth<510)
      {
        setMobileview(true)
      }
      else
      {
        setMobileview(false)
      }
      
    }

    handlewidth();
    handleResize(); // Run initial check

    
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handlewidth);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.addEventListener("resize", handlewidth);
      Aos.refresh(); // Reset AOS when component unmounts
    };
  }, []);
  const projectRef = useRef(null);
  return (
    <div className="container">
      <div className="project_sec" ref={projectRef} id="projects">
        <div className="project_cont">
          <div className="project_heading">
            <h2>My Web Projects</h2>
          </div>

          <div className="project_details">
            <div className="online_banking">
              <div className="online_banking_pic" data-aos="flip-right">
                <img src={bank} alt="OnlineBank" />
              </div>
              <div className="online_banking_details" data-aos="fade-left">
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
              <div className="shopping_center_pic" data-aos="flip-left">
                <img src={shopping} alt="shooping" />
              </div>
              <div className="online_banking_details" data-aos="fade-right">
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
              <div className="tourism_pic" data-aos="flip-right">
                <img src={tourism} alt="tourism" />
              </div>
              <div className="online_banking_details" data-aos="fade-left">
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
              <div className="travel_pic" data-aos="flip-left">
                <img src={travel} alt="travelling" />
              </div>
              <div className="online_banking_details" data-aos="fade-right">
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

        <div className="project_cont">
          <div className="project_heading">
            <h2>My UI/UX Projects</h2>
            </div>
            <div className="project_slider_sec">
              <div className="project_slider">
              { mobileview ? (
                <div className="projects_mobile">
                <div className="projects">
                    <div className="proj_sub">
                      <h3>Amroodlabs Event</h3>
                      <p>I design this project for client in Figma according to them. This is full project having disktop design, tab and mobile design. For design please click the below button.</p>
                      <button onClick={() => window.open("https://www.figma.com/design/MNYYgFXxgtdNmiMfcaIKX3/Amrood_Event?node-id=0-1&node-type=canvas&t=3SaVMNe5oeJEqhaW-0", "_blank")}>Figma link</button>
                    </div>
                  </div>

                  <div className="projects">
                    <div className="proj_sub">
                      <h3>Shopping Center</h3>
                      <p>I design this project for client in Figma according to them. This project is only for disktop. It containe multiple pages and items. For design please click the below button.</p>
                      <button onClick={() => window.open("https://www.figma.com/design/J1igH9Uq1bBrrLTDjfg2ov/ShoppingCenter?node-id=0-1&node-type=canvas&t=749C1fLEpDhylQfV-0", "_blank")}>Figma link</button>
                    </div>
                  </div>

                  <div className="projects">
                    <div className="proj_sub">
                      <h3>Hotet Managment</h3>
                      <p>This is 3 pages design in Figma. This project is also only for disktop. It containe home page, Add Image page and Add details page. For design please click the below button.</p>
                      <button onClick={() => window.open("https://www.figma.com/design/rSmJXlrHht0LZ5bI51sHvx/Hotel-Managment?node-id=1-2&node-type=frame&t=NdUUopZFq89HRyy4-0", "_blank")}>Figma link</button>
                    </div>
                  </div>

                  <div className="projects">
                    <div className="proj_sub">
                      <h3>Touarism</h3>
                      <p>This is only home page design made in Figma. This project contain multiple items like home page, navbar, booking system etc. For design please click the below button.</p>
                      <button onClick={() => window.open("https://www.figma.com/design/RXqChrNPb8uJdNepit6UB0/Booking?node-id=0-1&node-type=canvas&t=bpgy6j6vyKPG2RVi-0", "_blank")}>Figma link</button>
                    </div>
                  </div>
                </div>
              ): (<Slider {...settings} className="sliders">
                  <div className="projects">
                    <div className="proj_sub">
                      <h3>Amroodlabs Event</h3>
                      <p>I design this project for client in Figma according to them. This is full project having disktop design, tab and mobile design. For design please click the below button.</p>
                      <button onClick={() => window.open("https://www.figma.com/design/MNYYgFXxgtdNmiMfcaIKX3/Amrood_Event?node-id=0-1&node-type=canvas&t=3SaVMNe5oeJEqhaW-0", "_blank")}>Figma link</button>
                    </div>
                  </div>

                  <div className="projects">
                    <div className="proj_sub">
                      <h3>Shopping Center</h3>
                      <p>I design this project for client in Figma according to them. This project is only for disktop. It containe multiple pages and items. For design please click the below button.</p>
                      <button onClick={() => window.open("https://www.figma.com/design/J1igH9Uq1bBrrLTDjfg2ov/ShoppingCenter?node-id=0-1&node-type=canvas&t=749C1fLEpDhylQfV-0", "_blank")}>Figma link</button>
                    </div>
                  </div>

                  <div className="projects">
                    <div className="proj_sub">
                      <h3>Hotet Managment</h3>
                      <p>This is 3 pages design in Figma. This project is also only for disktop. It containe home page, Add Image page and Add details page. For design please click the below button.</p>
                      <button onClick={() => window.open("https://www.figma.com/design/rSmJXlrHht0LZ5bI51sHvx/Hotel-Managment?node-id=1-2&node-type=frame&t=NdUUopZFq89HRyy4-0", "_blank")}>Figma link</button>
                    </div>
                  </div>

                  <div className="projects">
                    <div className="proj_sub">
                      <h3>Touarism</h3>
                      <p>This is only home page design made in Figma. This project contain multiple items like home page, navbar, booking system etc. For design please click the below button.</p>
                      <button onClick={() => window.open("https://www.figma.com/design/RXqChrNPb8uJdNepit6UB0/Booking?node-id=0-1&node-type=canvas&t=bpgy6j6vyKPG2RVi-0", "_blank")}>Figma link</button>
                    </div>
                  </div>
                </Slider>)

              }
                
              </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
