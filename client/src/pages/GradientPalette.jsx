import React, { useState,useContext,useRef } from 'react'
import ColorChoice from '../component/ColorChoice';
import html2canvas from "html2canvas";
import Export from "../component/Export";
import * as Icon from "../styles/Icons";
import { ColorExtractor } from 'react-color-extractor'
import { currentColor } from '../component/ColorChoice';
import { hsvaToHex } from '@uiw/react-color';
import { exportComponentAsJPEG } from 'react-component-export-image';
import {EyeDropper} from"react-eyedrop"

export function Gradient() {
    const [src,setSrc]=useState("");
    const download=useRef(null)
    const [colors,setColors]=useState([]);
    const[change,setChange]=useState(-1);
    const [colorPalette,setColorpalette]=useState([]);
    const {hsva}=useContext(currentColor)

    const toImage = async() => {
    const element = document.getElementById('print'),
    canvas = await html2canvas(element),
    data = canvas.toDataURL('image/jpg')
    setSrc(data);
  };

  function handlechange (e){
    
    if(change>=0){
      let temp=colorPalette;
      temp[change]=e.hex;
      setColorpalette(temp);
      setChange(-1)
    }
  }

  return (
    <div>
        
        <ul>
            {colors.map((i,ind)=>{
                return <>
                <li key={ind}  className='button' style={{backgroundColor:i,padding:"2%"}} >{i}
                <button className="opacity" onClick={()=>setColors(colors.filter(c=>c!==i))}>{Icon.del}</button>
                </li>
                
                
                </>
            })}
        </ul>
        <button onClick={()=>{if(colors[colors.length-1]!==hsvaToHex(hsva)){
            setColors([...colors,hsvaToHex(hsva)])}
            else{
              alert("cannot add duplicate colors back to back")
            }}}>{Icon.add} add </button>

        {colors.length >=2 &&<div id="print" style={{backgroundImage: `linear-gradient(to right, ${colors}`}}>gradient</div>}
        {colors.length <2 && <div>gradient should have atleast 2 colors</div> }

        <button onClick={toImage}>palette</button>

        <ColorExtractor getColors={color =>{setColorpalette(color)} } maxColors={10}>
            <img src={src} style={{width:"0%"}}/>
        </ColorExtractor>
            {change!==-1&&src && <>
            <EyeDropper  className='name' onChange = {handlechange} cursorActive='crosshair'/>
            select from here
            <img src={src} style={{width:"100%"}}/></>}

        <ul ref={download} className='flex-row'>
            {
                colorPalette.map((i,ind)=>{
                    return <>
                    <li className='button' key={ind} style={{backgroundColor:i}}>{i}
                    <button  className='opacity' onClick={()=>setColorpalette(colorPalette.filter(c=>c!==i))}>{Icon.del}</button>
                    
                    {change!==ind && <>
                    <button className='opacity' onClick={()=>setChange(ind)}>{Icon.edit}</button>
                    </> }
                    </li>
                    
                    </>
                })
            }
        </ul>
        

        { colorPalette.length && <Export action="export" destination="palette" colors={colorPalette}/>}
        <br/>
        { colorPalette.length && <button className="downloads" onClick={()=>exportComponentAsJPEG(download)}>{Icon.download}download</button>}
        
    </div>
  )
}
export default function GradientPalette(){
    return(<>
    <ColorChoice caller="gradient"/>
    </>)

}
