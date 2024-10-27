import React, { useEffect, useRef } from 'react'
import '../Skills/Skills.css'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";
import { GiMaterialsScience } from "react-icons/gi";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

function Skills() {
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
  const skillRef = useRef(null)
    const skills = [
  { name: 'Communication', percentage: 80 },
  { name: 'Teamwork', percentage: 85 },
  { name: 'Problem Handling', percentage: 90 },
  { name: 'Planning', percentage: 80 },
];

const styles = {
  professionalSkills: {
display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
  },
  proSkill: {
    textAlign: 'center',
  },
  skillName: {
    marginTop: '10px',
    color: 'white',

  },
};

  return (
    <div className='container'>
      <div className='skills_sec' ref={skillRef} id='skills'>
      <div className='skills_cont'>
        <div className='skills_heading'>
            <h2>My Skills</h2>
        </div>

        <div className='skill_details'>
            <div className='techinical_skills' data-aos='fade-right'>
            <div className='skil'>
                <FaHtml5 className='html'/>
                <p>HTML</p>
                <progress value={0.9}/>
            </div>

            <div className='skil'>
                <IoLogoCss3 className='css'/>
                <p>CSS</p>
                <progress value={0.99}/>
            </div>

            <div className='skil'>
                <DiJavascript className='js'/>
                <p>JS</p>
                <progress value={0.8}/>
            </div>

            <div className='skil'>
                <FaReact className='react'/>
                <p>React js</p>
                <progress value={0.99}/>
            </div>

            <div className='skil'>
                <FaGithub className='github'/>
                <p>Github</p>
                <progress value={0.7}/>
            </div>

            <div className='skil'>
                <DiResponsive className='responsive'/>
                <p>Responsivenese</p>
                <progress value={0.89}/>
            </div>

            <div className='skil'>
                <GiMaterialsScience className='ui'/>
                <p>Material UI</p>
                <progress value={0.7}/>
            </div>

            <div className='skill skil'>
                <p className='UI'>UI</p>
                <p>UI Development</p>
                <progress value={0.9}/>
            </div>
                

            </div>
            <div className='profesional_skills' data-aos='fade-left'>

            <div className='proo_skill'>
            <div className='professional_skills' style={styles.professionalSkills}>
      {skills.map((skill, index) => (
        <div className='pro_skill' key={index} style={styles.proSkill}>
          <div className='circle'>
            <CircularProgressbar
              value={skill.percentage}
              text={`${skill.percentage}%`}
              styles={buildStyles({
                textSize: '16px',
                pathColor: 'rgb(49, 49, 248)', // Customize path color
                textColor: 'white',     // Customize text color
                trailColor: 'black',
              })}
            />
          </div>
          <p style={styles.skillName}>{skill.name}</p>
        </div>
      ))}
    </div>
            </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
