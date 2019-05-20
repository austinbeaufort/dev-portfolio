import React, { Component } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        let button;
        if (this.props.title === "Contact") {
            button = (
                <Link to="/contact">
                    <button className={styles.button}>{this.props.title}</button>
                </Link>
            )
        } else {
            button = (
                <Link to="/">
                    <button className={styles.button}>{this.props.title}</button>
                </Link>
            )
        }

        return(
        <div className={styles.navTitle}>
            <h5 className={styles.title}>
                Austin Beaufort
            </h5>
            {button}
        </div>
        )
    }
}


export default Navbar;