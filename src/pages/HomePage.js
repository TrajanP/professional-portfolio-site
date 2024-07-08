//Library imports ----------------------------------------
import React, { useState } from 'react';
//Styling imports ----------------------------------------
import css from './pagesCSS/homePage.module.css';
//Component imports ----------------------------------------
import Navbar from '../components/Navbar';
import InfoLadder from '../components/InfoLadder';
import ParallaxBackground from '../components/ParallaxBackground';

export const HomePage = () => {

    //Tracks vertical scroll in element
    const [scrollYProgress, setScrollYProgress] = useState([]);
    //HandleChange is called from InfoLadder Child Component to recieve Vertical Scroll
    const handleChange = (value) => {
        setScrollYProgress(value);
    };

    return (
        <div className={css.body}>
            <ParallaxBackground scrollYProgress={scrollYProgress}/>
            <Navbar/>
            <div className={css.leftBody}>
                <div className={css.title}>
                  <span style={{backgroundColor:"#5E17EB"}}> Greetings Earthling, <br/> I'm Trajan. </span>
                </div>
                <div className={css.subTitle}>
                    Developer - Learner - Explorer
                </div>
                <div className={css.bio}>
                    <p>
                        Software Developer in Nashville who enjoys coding with React Framework. 
                        Likes to stay flexible with working on both backend and frontend code.
                    </p>
                </div>
            </div>
            <div className={css.rightBody}>
                <InfoLadder handleChange={handleChange}/>
            </div>
        </div>
    )
};

export default HomePage;