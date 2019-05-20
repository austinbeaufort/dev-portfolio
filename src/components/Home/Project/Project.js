import React from 'react';
import styles from './Project.module.css';

const Project = props => {
    return (
        <div className={styles.projectCard}>
            <h6 className={styles.title}>{props.name}</h6>
            <img className={styles.portImages} src={props.img} alt="project design"/>
            <a href={props.demo}>
                <img src="https://i.ibb.co/P4KHqz1/Logo-Makr-7-Ad7-PW.png" width="100px" alt="demo" />
            </a>
            <a href={props.source}>
                <img src="https://i.ibb.co/jGRZtwH/Logo-Makr-7-HIf-A6.png" width="110px" alt="github source code" />
            </a>
            <p className={styles.description}>{props.description}</p>
            <p className={styles.description}>{props.description2}</p>
        </div>
    )
}

export default Project;