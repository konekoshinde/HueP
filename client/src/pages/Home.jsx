import React from 'react'
import styles from "../styles/Home.module.css"
import Card from "../component/Card"
function Home() {

  return (
    <div className={styles.main}>
        <div className={styles.head}>
          <h1 className={styles.title}>HUEP</h1>
          <p className={styles.intro}>Designing and visualising your own Palette</p>
          <br></br>
        </div>

        <div className={styles.service}>
          <h1>Services</h1>
          <p className={styles.serviceintro}>create,choose,edit your own palette</p>
          <div className={styles.servicecards}>
            <Card  name="Image Color Extractor" link="/imgpalette" msg="extract palette from img"/>
            <Card  name="Custom Palette" link= "/customPalette" msg="create custom palette"/>
            <Card  name="Gradient Palette" link="/Gradient" msg="extract palette from custom gradient"/>
            <Card  name="Schemes" link="/Scheme" msg="choose schemes obtained from single color"/>
            <Card  name="Site" link="/Site" mgs="observe ur own color palette on different visuals"/>
          </div>
        </div>

        <div className={styles.need}>
          <h1>Why HUEP?</h1>
          <p>try huep its free</p>
          <div className={styles.needbody}>
            <div className={styles.part1}>
              <h1>Love colors? use it!!</h1>
              <p>it doesnt matter whether you are artist or a graphic designer,if u love colors 
                and want to visualise it, this site is for u</p>
              <h1>Use others palette</h1>
              <p>dont know much about colors??dont worry others are there to help u.get their palette and edit as u wish</p>
            </div>
            <div className={styles.part2}>
              <h1></h1>
              <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, quibusdam.</h3>
              <h1>Heading</h1>
              <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, quibusdam.</h3>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
