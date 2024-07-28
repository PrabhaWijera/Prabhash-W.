import React,{ useContext } from 'react';
import Marquee from "react-fast-marquee";

import './styles/skills.css'

import { skillsData } from '../data/skillsData'
import { skillsImage } from '../util/skillsImage'

function Skills() {

  
    return (
        <div className="skills">
            <div className="skillsHeader">
             
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} >
                                <img src={skillsImage(skill)} alt={skill} />
                               
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills