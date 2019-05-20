import React, { Component } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = props => {

    let button;
    if (props.title === "Contact") {
        button = (
            <Link to="/contact">
                <button className={styles.button}>{props.title}</button>
            </Link>
        )
    } else {
        button = (
            <Link to="/">
                <button className={styles.button}>{props.title}</button>
            </Link>
        )
    }
    return (
    <div className={styles.navTitle}>
        <h5 className={styles.title}>
            Austin Beaufort
        </h5>
        {button}
    </div>
    )
}


export default Navbar;