import { useContext,useRef } from 'react';
import { hsvaToHex} from '@uiw/react-color';
import { Harmonizer } from "color-harmony"
import ColorChoice from "../component/ColorChoice";
import {currentColor} from "../component/ColorChoice";
import { exportComponentAsJPEG } from 'react-component-export-image';

import * as icon from "../styles/Icons"

function Harmony() {
  const download=useRef(null)
  const {hsva}=useContext(currentColor)
  const currcolor=hsvaToHex(hsva);

    const arr=[Harmonizer().harmonize(currcolor,"complementary"),Harmonizer().harmonize(currcolor,"splitComplementary"),Harmonizer().harmonize(currcolor,"splitComplementaryCW"),
    Harmonizer().harmonize(currcolor,"splitComplementaryCCW"),Harmonizer().harmonize(currcolor,"triadic"),Harmonizer().harmonize(currcolor,"clash"),
    Harmonizer().harmonize(currcolor,"fiveToneA"),Harmonizer().harmonize(currcolor,"fiveToneB"),Harmonizer().harmonize(currcolor,"fiveToneC"),
    Harmonizer().harmonize(currcolor,"fiveToneD"),Harmonizer().harmonize(currcolor,"fiveToneE"),Harmonizer().harmonize(currcolor,"tetradic"),
    Harmonizer().harmonize(currcolor,"neutral"),Harmonizer().harmonize(currcolor,"fourToneCCW"),Harmonizer().harmonize(currcolor,"fourToneCW"),
    Harmonizer().harmonize(currcolor,"sixToneCCW"),Harmonizer().harmonize(currcolor,"sixToneCW"),Harmonizer().harmonize(currcolor,"analogous")]
    let display=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R']

    const show =  arr.map((i,index)=>
        <ul className='flex-row'>
          <div className='name'>{display[index]}</div>
          <br/>
            <li key={index}> {i.map((c,ind) =>
              <li key={ind} style={{backgroundColor:c}} className='button'>
                {c}
                <button className='opacity'>{icon.copy}</button>
              </li>
            )} 
            </li>
        </ul>
    )
  return (
    <div>
      <button onClick={()=>exportComponentAsJPEG(download)} className='downloads'>{icon.download}Download</button>
      <div  ref={download}>{show}</div>
        
    </div>
  )
}


export default function Scheme() {
  return (
    <div>
      <ColorChoice caller="scheme"/>
    </div>
  )
}
export {Harmony}
