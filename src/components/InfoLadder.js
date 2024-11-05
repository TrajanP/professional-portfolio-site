//Library imports ----------------------------------------
import React, { useEffect, useRef } from 'react';
import { useScroll } from 'framer-motion';
//Styling import ----------------------------------------
import css from './componentsCSS/infoLadder.module.css';
//React Icons imports ----------------------------------------
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

export const InfoLadder = ({handleChange}) => {

    //Tracks vertical scroll in element
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({container: ref});

    //On vertical scroll change, we send new value back to parent
    useEffect(() => { 
        handleChange(scrollYProgress);
    }, [scrollYProgress]);

    return (
        <div className={css.body} ref={ref}>
            <section className={css.section} id="skillsID">
                <div className={css.sectionBody}>
                    <span className={css.title}> Developer Skillset </span>
                    <div className={css.line}/>
                    <p className={css.bio}>
                        Software Developer in Nashville who enjoys coding with the React Framework. 
                        Likes to stay flexible by working on both backend and frontend code.
                    </p>
                    <span className={css.subTitle}> Languages </span>
                    <div className={css.lineHalf1}/>
                    <div className={css.footer}>
                        <span className={css.badge}>Java Script</span>
                        <span className={css.badge}>C++</span>
                        <span className={css.badge}>HTML</span>
                        <span className={css.badge}>SQL</span>
                        <span className={css.badge}>CSS</span>
                    </div>
                    <span className={css.subTitle}> Frameworks & Tools </span>
                    <div className={css.lineHalf2}/>
                    <div className={css.footer}>
                        <span className={css.badge}>React</span>
                        <span className={css.badge}>Postman</span>
                        <span className={css.badge}>Postgres</span>
                        <span className={css.badge}>Git</span>
                        <span className={css.badge}>Node JS</span>
                        <span className={css.badge}>Express</span>
                    </div>
                </div>
            </section>
            <section className={css.section} id="educationID">
            <div className={css.sectionBody}>
                    <span className={css.title}> Experience </span>
                    <div className={css.line}/>
                    <p className={css.bio}>
                        I'm a Junior Developer eager to sharpen my coding abilities in a professional environment. 
                        Experience with both solo and team based development efforts to provide a needed product. 
                    </p>
                    <span className={css.subTitle}> Education </span> 
                    <div className={css.lineHalf1}/>
                    <span style={{display:"flex", justifyContent:"left", margin:"10px", marginLeft:"0px",fontSize:"2vh" }}> Lipscomb University (2019 - 2023) </span>
                    <span className={css.roleBox}> - Bachelors of Science in Software Engineering </span>
                    <span className={css.subTitle}> Current Employment </span> 
                    <div className={css.lineHalf2}/>
                    <span style={{display:"flex", justifyContent:"left", margin:"10px", marginLeft:"0px",fontSize:"2vh" }}> HCA Healthcare (2023 - 2024) </span>
                    <span className={css.roleBox}> - Technical Analyst </span>
                </div>
            </section>
            <section className={css.section} id="contactID">
            <div className={css.sectionBody}>
                    <span className={css.title}> First Contact </span>
                    <div className={css.line}/>
                    <p className={css.bio}>
                        Now you've got an idea of what I'm about, I'd love to hear what you think!
                        Reach out to me at my below links or take a peak at what else I'm working on!
                    </p>
                    <div className={css.list}>
                        <div style={{display:"flex", flexWrap:"wrap"}}><span className={css.logo} > <span style={{marginRight:".5rem"}}> Github </span> <FaGithubSquare /></span> <a className={css.link} href="https://github.com/TrajanP" target="_blank"> - What I'm working on. </a> </div>
                        <div style={{display:"flex", flexWrap:"wrap"}}><span className={css.logo} > <span style={{marginRight:".5rem"}}> LinkedIn </span> <FaLinkedin /></span> <a className={css.link} href="http://www.linkedin.com/in/trajan-parkes" target="_blank"> - Connect with me. </a> </div>
                        <div style={{display:"flex", flexWrap:"wrap"}}><span className={css.logo} > <span style={{marginRight:".5rem"}}> Resume </span> <FaPaperPlane /></span> <a className={css.link} href="https://docs.google.com/document/d/1lOMhonQRY0ex75OCdpBR9u8ebpwN86YEBgN1iO0kAEk/edit?usp=sharing" target="_blank"> - More about me. </a> </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default InfoLadder;