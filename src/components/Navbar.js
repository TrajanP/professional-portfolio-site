//Library imports ----------------------------------------
import React from 'react';
import { Link } from 'react-router-dom';
//Styling imports ----------------------------------------
import css from './componentsCSS/navbar.module.css';

export const Navbar = () => {
    return (
        <div  className={css.navBody}>
           <div className={css.navBodyLeft}>
                <span style={{fontWeight:"bold"}}> Far Out! </span> 
                <div className={css.logo} ><lottie-player  src="https://lottie.host/cced1e2e-32bc-4ec8-a7ea-51ff62264850/XtD44XYvIz.json" background="##FFFFFF" speed="1" loop autoplay direction="1" mode="normal"></lottie-player> </div>
            </div>
           <div className={css.navBodyRight}>
              <div style={{display:"flex", alignItems:"center"}}><div className={css.dot}/>  <Link to="/" className={css.link}> Home </Link></div>
              <div style={{display:"flex", alignItems:"center"}}><div className={css.dot}/> <Link to="/projects" className={css.link}> My Projects </Link> </div>
           </div>
        </div>
    )
};

export default Navbar;