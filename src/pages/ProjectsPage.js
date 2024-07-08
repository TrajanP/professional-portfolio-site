//Library imports ----------------------------------------
import React, { useRef, useState } from 'react';
//Styling imports ----------------------------------------
import css from './pagesCSS/projectsPage.module.css';
//Component imports ----------------------------------------
import Navbar from '../components/Navbar';
import ParallaxProjects from '../components/ParallaxProjects';
//React icons imports ----------------------------------------
import { FaGithubSquare } from "react-icons/fa";
//Media imports ----------------------------------------
import Project1 from '../media/Project1.png';

export const ProjectsPage = () => {
    const [scrollYProgress, setScrollYProgress] = useState([]);
    const handleChange = (value) => {
        setScrollYProgress(value);
    }

    return (
         <div className={css.body}>
            <ParallaxProjects scrollYProgress={scrollYProgress}/>
            <Navbar/>
            {/* Project One */}
            <section className={css.section}>
                <div className={css.title}>
                            Ready Set Travel
                </div>
                <div className={css.leftBody}>
                    <div className={css.border}>
                        <div className={css.subTitle}>
                        <span style={{backgroundColor:"#5E17EB", padding:"5px"}}> It's time to pack your bags. </span>
                        </div>
                        <div className={css.bio}>
                            <p>
                            Ready Set Travel is a simple and intuitive way to make your next adventure easier and more enjoyable. Focusing on a visual way to represent your trip with a stop-by-stop itinerary represented on a dynamic world map.<br/><br/>
                            With the goal of avoiding spending even more time on itinerary planning, the visual experience is simple and lightweight. A few clicks, and you are already on your way to planning your trip.<br/><br/>
                            Our visual planner allows you to spend more time sipping piña coladas or finding new adventures rather than being overwhelmed with trip planning.<br/><br/> So start clicking, that beach hammock is closer than you think!
                            </p>
                        </div>
                    </div>
                </div>
                <div className={css.rightBody}>
                    <div className={css.imgContainer}>
                        <img style={{scale:"1.5", borderRadius:"10px", objectFit:"fit"}} src={Project1}/>
                    </div>
                    <div className={css.footer}>
                        <a className={css.link} href="url">Github <FaGithubSquare/> </a> 
                    </div>
                </div>
            </section>
        </div>
    )
};

export default ProjectsPage;
