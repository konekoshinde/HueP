import { useState,useContext,useRef } from 'react'
import ColorChoice from '../component/ColorChoice';
import html2canvas from "html2canvas";
import Export from "../component/Export";
import * as Icon from "../styles/Icons";
import { ColorExtractor } from 'react-color-extractor'
import { currentColor } from '../component/ColorChoice';
import { hsvaToHex } from '@uiw/react-color';
import { exportComponentAsJPEG } from 'react-component-export-image';
import {EyeDropper} from"react-eyedrop"
import styles from "../styles/ImgPalette.module.css"


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
    <div >
        <button className={styles.buttonClick} onClick={()=>{
            if(colors[colors.length-1]!==hsvaToHex(hsva)){setColors([...colors,hsvaToHex(hsva)])}
            else{alert("cannot add duplicate colors back to back")}}}>{Icon.add}
        </button>

        <div className={styles.list}>

            <ul className={styles.ul} style={{border:"0px"}}>
                {colors.map((i,ind)=>{
                    return <>
                    <li key={ind}  className={styles.button} style={{backgroundColor:i,padding:"2%"}} >{i}
                    <button className={styles.opacity} onClick={()=>setColors(colors.filter(c=>c!==i))}>{Icon.del}</button>
                    </li>
                    </>
                })}
            </ul>
        </div>

        {colors.length >=2 &&<div id="print" style={{backgroundImage: `linear-gradient(to right, ${colors}`}}>gradient</div>}
        <br/>
        {colors.length <2 && <div style={{color:"rgba(7, 28, 29,.5)"}}>gradient should have atleast 2 colors</div> }

        <button onClick={toImage} className={styles.buttonClick}>palette</button>

        <ColorExtractor getColors={color =>{setColorpalette(color)} } maxColors={10}>
            <img src={src} style={{width:"0%"}}/>
        </ColorExtractor>
        {change!==-1&&src && 
        <>
            <EyeDropper  className='name' onChange = {handlechange} cursorActive='crosshair'/>
            select from here
            <img src={src} style={{width:"100%"}}/>
        </>}
            
        <div className={styles.list}>

        <ul ref={download}>
            {
                colorPalette.map((i,ind)=>{
                    return <>
                    <li className={styles.button} key={ind} style={{backgroundColor:i}}>{i}
                    <button className={styles.opacity} onClick={()=>setColorpalette(colorPalette.filter(c=>c!==i))}>{Icon.del}</button>
                    
                    {change!==ind && <>
                    <button className={styles.opacity} onClick={()=>setChange(ind)}>{Icon.edit}</button>
                    </> }
                    </li>
                    
                    </>
                })
            }
        </ul>
        
        <div className={styles.download}>
            
        { colorPalette.length && <button  onClick={()=>exportComponentAsJPEG(download)} className={styles.downloadbutton}>{Icon.download}download</button>}
        <br/>
        { colorPalette.length && <Export action="export" destination="palette" colors={colorPalette}/>}
        </div>
        
        </div>
    </div>
  )
}
export default function GradientPalette(){
    return(<>
    <div className={styles.heading}>
        <h1>Gradient Palette</h1>
        <h3>generate gradient palette</h3>
    </div>
    <div className={styles.main}>
    <ColorChoice caller="gradient"/>

    </div>

    </>)

}
