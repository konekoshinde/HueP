import React from 'react'
import styles from "../styles/Nav.module.css";
import {Link} from "react-router-dom";

function Nav() {
  return (
    <nav className={styles.nav}>
        <h1 className = {styles.main}>HUEP</h1>
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
