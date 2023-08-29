import { useState ,useRef} from "react"
import ColorThief from "colorthief"
import { rgbaToHex } from "@uiw/react-color";
import {EyeDropper} from"react-eyedrop"
import Export from "../component/Export";
import * as icon from"../styles/Icons"
import { exportComponentAsJPEG } from 'react-component-export-image';
import styles from "../styles/ImgPalette.module.css"


export default function ImgPalette(props) {
  const [colors,setColors]=useState([]);
  const[change,setChange]=useState(-1);
  const download=useRef(null)
  const [imgupload,setImg]=useState(null);

  


  function handlechange (e){
    console.log(e)
    if(change>=0){
      let temp=colors;
      temp[change]=e.hex;
      setColors(temp);
      console.log(colors)
      setChange(-1)
    }
  }


  const handleChange=(e)=>{
    const file=e.target.files[0];
    const reader=new FileReader();

    reader.onload=async(event)=>{
      const img=new Image();
      img.onload=()=>{
        const colorThief=new ColorThief();
        const colorPalette=colorThief.getPalette(img,5);
        setImg(event.target.result);
        let temp=[];
        colorPalette.forEach(color => {
          const toRGBA={r:color[0],g:color[1],b:color[2],a:1}
          temp.push(rgbaToHex(toRGBA));
        });
        
        setColors(temp);
      }
      img.src=event.target.result;
    }
    reader.readAsDataURL(file);
  }
  
  return (
    <div className={styles.heading}>

      <h1>Image Color Extractor</h1>
      <h3>Extract beautiful palettes from your Photos</h3>
      <div className={styles.main}>
        <div>

        <label htmlFor="file" className="downloads">{icon.photo}</label>
        <input type="file" hidden id="file" onChange={handleChange}></input>
        <div>
          {imgupload?(<img src={imgupload} className={styles.img}/>):(<h2>Insert Image</h2>)}
        </div>

        {change!==-1&& imgupload && <>
              <EyeDropper onChange = {handlechange} cursorActive='crosshair'/></>}
        </div>
        
        <div className={styles.list} >
        <ul ref={download}>
              {
                  colors.map((i,ind)=>{
                    return <>
                      <li key={ind} style={{backgroundColor:i}} className={styles.button}>{i}
                      <button className={styles.opacity} onClick={()=>setColors(colors.filter(c=>c!==i))}>{icon.del}</button>
                      
                      {change!==ind && <>
                      <button className={styles.opacity} onClick={()=>setChange(ind)}>{icon.edit}</button>
                      </> }
                      </li>
                      
                      </>
                  })
              }
          </ul>


          <div className={styles.download}>
            {colors.length && <button  onClick={()=>exportComponentAsJPEG(download)} className={styles.downloadbutton}>{icon.download}Download</button>}
            <br/>
            {colors.length && <Export action="export" destination="palette" colors={colors}/>}
          </div>
        
          
          </div>

      </div>
    </div>
  )
}
