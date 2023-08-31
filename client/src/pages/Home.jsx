import React from 'react'
import styles from "../styles/Home.module.css"
import Card from "../component/Card"

import photo from "../images/logo.png";
function Home() {

  return (
    <div className={styles.main}>
        <div className={styles.head}>
          <div>
            <h1 className={styles.title}>HUEP</h1>
            <p className={styles.intro}>Designing and visualising your own Palette</p>
          </div>
          <img src={photo} style={{width:"50%",height:"200px",backgroundColor:"rgb(250, 237, 237)",padding:"2%"}}/>
          </div>
          
          <br></br>
        <div style={{backgroundColor:"white"}}>....</div>

        <div className={styles.service}>
          <h1>Services</h1>
          <p className={styles.serviceintro}>Create, Choose, Edit your own Palette</p>
          <br/>
          <div className={styles.servicecards}>
            <Card  name="Image Color Extractor" link="/imgpalette" msg="Extract Palette from Image"/>
            <Card  name="Custom Palette" link= "/customPalette" msg="Create Custom Palette"/>
            <Card  name="Gradient Palette" link="/Gradient" msg="Extract Palette from Custom Gradient"/>
            <Card  name="Schemes" link="/Scheme" msg="Choose Schemes obtained from Single Color"/>
            <Card  name="Site" link="/Site" msg="Observe your Own Color Palette on Different Visuals"/>
          </div>
        </div>
        <div style={{backgroundColor:"white"}}>....</div>
        <div className={styles.need}>
          <h1>Why HUEP?</h1>
          <p>try huep its free</p>
          <div className={styles.needbody}>
            <div className={styles.part1}>
    
              <h2>Makes visualisation easier</h2>
              <p>Helps to decide which colors to use</p>
              <h2>Search for palette</h2>
              <p>No expertise ? get help from others palette</p>
              
            </div>
            <div className={styles.part1}>
            <h2>Export your palette</h2>
              <p>Want to showcase your palettes? exporting it is also a choice</p>
              <h2>Download</h2>
              <p>Import it in your machine through downloads </p>
            </div>
          </div>
        </div>
        <div style={{backgroundColor:"white"}}>....</div>
    </div>
  )
}

export default Home
