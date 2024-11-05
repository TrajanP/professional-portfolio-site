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
import Project2 from '../media/PAAThumbnail.png';

export const ProjectsPage = () => {

    return (
         <div className={css.body}>
            <Navbar/>
            {/* Project One */}
            <section className={css.section}>
                <div className={css.title}>
                    Ready Set Travel
                </div>
                <div className={css.sectionBody}>
                    <div className={css.leftBody}>
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
                    <div className={css.rightBody}>
                        <div className={css.imgContainer}>
                            <img alt="Image for Ready Set Trave Project Site" className={css.thumbnail} src={Project1}/>
                        </div>
                        <div className={css.footer}>
                            <a className={css.link} href="https://github.com/TrajanP/ready-set-travel" target="_blank">Github <FaGithubSquare/> </a> 
                        </div>
                    </div>
                </div>
            </section>


            {/* Project Two */}
            <section className={css.section}>
                <div className={css.title}>
                    Paging All Airports
                </div>
                <div className={css.sectionBody}>
                    <div className={css.leftBody}>
                            <div className={css.subTitle}>
                            <span style={{backgroundColor:"#5E17EB", padding:"5px"}}> It's time to page your airport. </span>
                            </div>
                            <div className={css.bio}>
                                <div>
                                    Combining my love for Travel and Code, Paging All Airports is a single page web app displaying valuable information for your chosen airport.
                                    <br/><br/>
                                    By entering your chosen Airport identification code, you can stay up to date with the following information.
                                    <br></br>
                                    <div style={{paddingTop:"2rem"}}>
                                        <span style={{display:"flex", alignItems:"center"}}> <div className={css.dot}/> <span>Airport Weather</span> </span>
                                        <span style={{display:"flex", alignItems:"center"}}> <div className={css.dot}/> <span>Airport General Info</span> </span>
                                        <span style={{display:"flex", alignItems:"center"}}> <div className={css.dot}/> <span>Arrival Flights</span> </span>
                                        <span style={{display:"flex", alignItems:"center"}}> <div className={css.dot}/> <span>Departure Flights</span> </span>
                                    </div>     
                                </div>
                            </div>
                    </div>
                    <div className={css.rightBody}>
                        <div className={css.imgContainer}>
                            <img alt="Image for Paging All Airports Site" className={css.thumbnail} src={Project2}/>
                        </div>
                        <div className={css.footer}>
                            <a className={css.link} href="https://github.com/TrajanP/paging-all-airports" target="_blank">Github <FaGithubSquare/> </a> 
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default ProjectsPage;
