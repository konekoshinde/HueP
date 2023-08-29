import { useContext,useRef } from 'react';
import { hsvaToHex} from '@uiw/react-color';
import { Harmonizer } from "color-harmony"
import ColorChoice from "../component/ColorChoice";
import {currentColor} from "../component/ColorChoice";
import { exportComponentAsJPEG } from 'react-component-export-image';
import styles from "../styles/ImgPalette.module.css"

import * as icon from "../styles/Icons"

function Harmony() {
  const download=useRef(null)
  const {hsva}=useContext(currentColor)
  const currcolor=hsvaToHex(hsva);

    const arr=[Harmonizer().harmonize(currcolor,"complementary"),Harmonizer().harmonize(currcolor,"splitComplementary"),Harmonizer().harmonize(currcolor,"splitComplementaryCW"),
    Harmonizer().harmonize(currcolor,"splitComplementaryCCW"),Harmonizer().harmonize(currcolor,"triadic"),Harmonizer().harmonize(currcolor,"tetradic"),
    Harmonizer().harmonize(currcolor,"fiveToneA"),Harmonizer().harmonize(currcolor,"fiveToneB"),Harmonizer().harmonize(currcolor,"fiveToneC"),
    Harmonizer().harmonize(currcolor,"fiveToneD"),Harmonizer().harmonize(currcolor,"fiveToneE"),
    Harmonizer().harmonize(currcolor,"neutral"),Harmonizer().harmonize(currcolor,"fourToneCCW"),
    Harmonizer().harmonize(currcolor,"sixToneCCW"),Harmonizer().harmonize(currcolor,"analogous")]
    let display=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R']

    const show =  arr.map((i,index)=>
        <ul className={styles.list} >
            <li key={index} className={styles.li}> {i.map((c,ind) =>
              <li key={ind} className={styles.button} style={{backgroundColor:c}} >
                {c}
                <button className={styles.opacity}>{icon.copy}</button>
              </li>
            )} 
            </li>
        </ul>
    )
  return (
    <div>
      <button onClick={()=>exportComponentAsJPEG(download)} className={styles.downloadbutton}>{icon.download}Download</button>
      <div  ref={download} >{show}</div>
        
    </div>
  )
}


export default function Scheme() {
  return (
    <>
      <div className={styles.heading}>

      <h1>Scheme Generator</h1>
      <h3>Create schemes for single color</h3>
        <div className={styles.separate}>
        <ColorChoice caller="scheme"/>
        </div>
        </div>
      </>

  )
}
export {Harmony}
