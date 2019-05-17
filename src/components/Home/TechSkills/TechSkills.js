import React from 'react';
import styles from './TechSkills.module.css';

const TechSkills = () => {
    return (
        <div>
            <h6 className={styles.title}>Technical Skills</h6>
            <p className={styles.techStrong}><strong>Strong: </strong>JavaScript, Git, ReactJS, Node, Express, MongoDB, jQuery, HTML/CSS</p>
            <p className={styles.techEnd}><strong>Experienced: </strong>Python, Mocha, Cheerio, Arduino</p>
        </div>
    )
}

export default TechSkills;