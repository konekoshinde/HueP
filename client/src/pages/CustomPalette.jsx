import { forwardRef, useContext, useEffect, useImperativeHandle, useRef} from "react";
import ColorChoice from "../component/ColorChoice";
import {currentColor} from "../component/ColorChoice";
import { useState } from "react";
import * as icon from "../styles/Icons"
import {hsvaToHex } from "@uiw/react-color";
import Export from "../component/Export";
import { exportComponentAsJPEG } from 'react-component-export-image';
import styles from "../styles/ImgPalette.module.css"



const Palette=forwardRef((props,ref)=>{
    const[change,setChange]=useState(null);
    const download=useRef(-1)
    const [colors,setColors]=useState(['#283057','#c6b9df','#40738c','#3c6466','#270934']);

    const {hsva}=useContext(currentColor)
    

    useImperativeHandle((ref),()=> ({
      updateColor(value){setColors(value)}}))



    useEffect(()=>{
      if(change>=0){
        let temp=colors;
        temp[change]=hsvaToHex(hsva);
        setColors(temp);
      }
    },[hsva])

    const show =  colors.map((i,index)=>
        <div >
            <li  key= {index} style={{backgroundColor:i}} className={styles.button}> {i}
            <button onClick={()=>setColors(colors.filter(c=>c!==i))} className={styles.opacity}>{icon.del}</button>
            {change===index && <button className={styles.opacity} onClick={()=>setChange(-1)}>{icon.done}</button>}
            {change!==index &&<button className={styles.opacity} onClick={()=>setChange(index)}>{icon.edit}</button> }
            </li>
            
            <br/>
        </div>
    )
    return (
      <>
        <button onClick={()=>{
          if(colors[colors.length-1]!==hsvaToHex(hsva)){
            setColors([...colors,hsvaToHex(hsva)])}
          else{alert("cannot add duplicate colors back to back")
          }}}>{icon.add}</button>

      <div className={styles.list}>


        <ul ref={download}>{show}</ul>
        <div className={styles.download}>
          {colors.length && <button  onClick={()=>exportComponentAsJPEG(download)} className={styles.downloadbutton}>{icon.download}Download</button>}
            <br/>
          {colors.length && <Export action="export" destination="palette" colors={colors}/>}
        </div>

      </div>
      </>
    )
})


export default function CustomPalette() {
    return (
      <>

      <div className={styles.heading}>

      <h1>Palette Generator</h1>
      <h3>Create Customized Palettes</h3>
        <div className={styles.main}>
          <ColorChoice caller="customPalette"/>
        </div>
        </div>
      </>
      )
}

export {Palette}
