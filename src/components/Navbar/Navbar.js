import React, { Component } from 'react';
import styles from './Navbar.module.css';
import { Navbar, NavItem, NavbarBrand, Container, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

class AppNavbar extends Component {

    render() {
        return(
        <div className={styles.navTitle}>
            <h5 className={styles.title}>
                Austin Beaufort
            </h5>
            <Link to='/contact'>
                <button className={styles.button}>Contact</button>
            </Link>
        </div>
        )
    }
}


export default AppNavbar;