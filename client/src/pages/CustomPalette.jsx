import { forwardRef, useContext, useEffect, useImperativeHandle, useRef} from "react";
import ColorChoice from "../component/ColorChoice";
import {currentColor} from "../component/ColorChoice";
import { useState } from "react";
import * as icon from "../styles/Icons"
import {hsvaToHex } from "@uiw/react-color";

import Export from "../component/Export";
import { exportComponentAsJPEG } from 'react-component-export-image';
import { ClassNames } from "@emotion/react";

const Palette=forwardRef((props,ref)=>{
    const[change,setChange]=useState(null);
    const download=useRef(-1)
    const [colors,setColors]=useState(['#283057','#c6b9df','#40738c']);

    const {hsva}=useContext(currentColor)
    

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
            <li  key= {index} style={{backgroundColor:i}} className='button'> {i}
            <button onClick={()=>setColors(colors.filter(c=>c!==i))} className='opacity'>{icon.del}</button>
            {change===index && <button className='opacity' onClick={()=>setChange(-1)}>{icon.done}</button>}
            {change!==index &&<button className='opacity' onClick={()=>setChange(index)}>{icon.edit}</button> }
            </li>
            
            <br/>
        </>
    )
    return (
      <div>
          <ul ref={download}>{show}</ul>
          <button onClick={()=>{if(colors[colors.length-1]!==hsvaToHex(hsva)){
            setColors([...colors,hsvaToHex(hsva)])}
            else{
              alert("cannot add duplicate colors back to back")
            }}}>{icon.add}</button>
          {colors.length && <>

          <Export action="export" destination="palette" colors={colors}/>
          <button onClick={()=>exportComponentAsJPEG(download)}>{icon.download}</button>
          </>}
      </div>
    )
})


export default function CustomPalette() {
    return (
        <div>
          <ColorChoice caller="customPalette"/>
        </div>
      )
}

export {Palette}
