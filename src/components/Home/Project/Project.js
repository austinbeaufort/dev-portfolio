import React from 'react';
import styles from './Project.module.css';
const Project = props => {
    return (
        <div className={styles.projectCard}>
            <h6 className={styles.title}>{props.name}</h6>
            <img className={styles.portImages} src={props.img} alt="project design"/>
            <p className={styles.description}>{props.description}</p>
            <p className={styles.description}>{props.description2}</p>
        </div>
    )
}

export default Project;