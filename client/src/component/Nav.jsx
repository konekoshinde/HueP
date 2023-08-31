import React from 'react'
import styles from "../styles/Nav.module.css";
import {Link} from "react-router-dom";

import photo from "../images/logo.png";


function Nav() {
  return (
    <nav className={styles.nav}>
        <img src={photo} style={{width:"150px"}}/>
        <ul  className={styles.option}>
            <li>
                <Link to="/" className={styles.link}>Home</Link>
            </li>
            <li>
                <Link to = "/imgpalette" className={styles.link}>Image Color Extractor</Link>
            </li>
            <li>
                <Link to ="/custompalette" className={styles.link}>Custom Palette</Link>
            </li>
            <li>
                <Link to="/Gradient" className={styles.link}>Gradient Palette</Link>
            </li>
            <li>
                <Link to = "/Scheme" className={styles.link}>Schemes</Link>
            </li>
            <li>
                <Link to = "/Site" className={styles.link}>Site</Link>
            </li>
            
        </ul>
      
    </nav>
  )
}

export default Nav
