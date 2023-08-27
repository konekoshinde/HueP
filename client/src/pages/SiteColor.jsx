import { forwardRef, useRef, useState,useEffect ,useImperativeHandle,useContext} from 'react'
import { Harmonizer } from 'color-harmony';
import ColorChoice from '../component/ColorChoice';
import Template from '../component/Template';
import { hsvaToHex } from '@uiw/react-color';
import {currentColor} from "../component/ColorChoice";
import Export from '../component/Export';
import * as icon from "../styles/Icons"
import "../styles/AllPalette.css"


export function Harmonies(props) {

    const {hsva}=useContext(currentColor);

    const currcolor=hsvaToHex(hsva)
    
    const arr=[Harmonizer().harmonize(currcolor,"fiveToneA"),Harmonizer().harmonize(currcolor,"fiveToneB"),Harmonizer().harmonize(currcolor,"fiveToneC"),
    Harmonizer().harmonize(currcolor,"fiveToneD"),Harmonizer().harmonize(currcolor,"fiveToneE"),Harmonizer().tints(currcolor,5),Harmonizer().shades(currcolor,5),Harmonizer().tones(currcolor,5)]
    
    let display=['A','B','C','D','E','tint','shade','tone']
  return (
    <div>
       {display.map((i,index)=>
            <li key={index}><button onClick={()=>props.buttonRef1.current.updateColor(arr[index])} >{i}</button></li>
        )}
    </div>
  )
}


export default function SiteColor() {
  return (
    <div>
      <ColorChoice caller="Site"/>
      
    </div>
  )
}

const Site =forwardRef((props,ref)=>{
  const {hsva}=useContext(currentColor);

  const [colors,setColors]=useState(["#71e6f0","#002326","#e4d982","#090801","#f7e7e7"]);
  const[change,setChange]=useState(null);
  const download=useRef(null)
  let display=['primary','secondary','accent','text','background']


  useImperativeHandle((ref),()=> ({
    updateColor(value){
       setColors(value)
    }
  }))
  useEffect(()=>{
    if(change>=0){
      let temp=colors;
      temp[change]=hsvaToHex(hsva);
      setColors(temp);
    }
  },[hsva])
  const show =  colors.map((i,index)=>
    <>
    <li className='button' key= {index} style={{backgroundColor:i}}> {i} 
    {change===index && <button onClick={()=>setChange(-1)} className='opacity'>{icon.done}</button>}
    {change!==index &&<button onClick={()=>setChange(index)} className='opacity'>{icon.edit}</button> }</li>
    
    <br/>
    </>
  )

  return (
    <div>
      <ul ref={download} className='flex-row'>{show}</ul>
      <Export action="export" destination="palette" colors={colors}/>
      <br/>
      <button className='downloads' onClick={()=>exportComponentAsJPEG(download)}>{icon.download}download</button>

      <Template colors={colors}/>
    </div>
  )
  
})

export {Site}