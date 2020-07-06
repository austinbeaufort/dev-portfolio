import React from 'react';
import styles from './TechSkills.module.css';

const TechSkills = () => {
    return (
        <div>
            <h6 className={styles.title}>Technical Skills</h6>
            <p className={styles.techStrong}><strong>Strong: </strong>JavaScript, Git, Express, Node, Testing (Chai, Mocha, Sinon), CSS, HTML</p>
            <p className={styles.techStrong}><strong>Experienced: </strong>Typescript, React, Python</p>
            <p className={styles.techEnd}><strong>Learning: </strong>C++</p>
        </div>
    )
}

export default TechSkills;