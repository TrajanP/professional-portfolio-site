//Library imports ----------------------------------------
import React from 'react';
import { motion, useTransform} from 'framer-motion';
//Styling imports ----------------------------------------
import css from './componentsCSS/parallaxBackground.module.css';

export const ParallaxProjects = ({scrollYProgress}) => {

    //Scales are used to set direction and speed of Motion elements
    const scale2 = useTransform(scrollYProgress, [0, 1], ["-63%", "-30%"]);

    return (
        <div className={css.body}>
            <motion.div style={{ y: scale2 }} className={css.starsBG}/>
        </div>
    )
};

export default ParallaxProjects;