import React from 'react'
import styles from "../styles/Card.module.css"
import { Link } from 'react-router-dom'
function Card(props) {

  return (
    <div>
        <div className={styles.card}>
            <div className={styles.content}>
                <Link to={props.link} className={styles.link}>{props.name}</Link>
            </div>
        </div>
        <p className={styles.p}>{props.msg}</p>
        
      
    </div>
  )
}

export default Card
