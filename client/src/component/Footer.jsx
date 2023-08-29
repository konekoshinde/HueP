import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../styles/Footer.module.css"

function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.about}>
            <h1>HUEP</h1>
            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, molestias!</h3>
        </div>
        <div className={styles.section}>
            <h2>Quick Links</h2>
            <div className={styles.links}>
                <Link to="/" className={styles.link}>About Us</Link>
                <Link to="/imgpalette" className={styles.link}>Image Color Extractor</Link>
                <Link to="/custompalette" className={styles.link}>Custom Palette</Link>
                <Link to="/Gradient" className={styles.link}>Gradient Palette</Link>
                <Link to="/Scheme" className={styles.link}>Schemes</Link>
                <Link to="/Site" className={styles.link}>Site</Link>

            </div>
        </div>

      
    </div>
  )
}

export default Footer
