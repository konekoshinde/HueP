import { useState ,useRef} from "react"
import ColorThief from "colorthief"
import { rgbaToHex } from "@uiw/react-color";
import {EyeDropper} from"react-eyedrop"
import Export from "../component/Export";
import * as icon from"../styles/Icons"
import { exportComponentAsJPEG } from 'react-component-export-image';
import { Height } from "@mui/icons-material";
import style from "../styles/ImgPalette.module.css"

export default function ImgPalette(props) {
  const [colors,setColors]=useState([]);
  const[change,setChange]=useState(null);
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
    <div className={style.main}>
      <div>

      <label htmlFor="file" className="downloads">{icon.photo}</label>
      <input type="file" hidden id="file" onChange={handleChange}></input>
      <div>
        {imgupload?(<img src={imgupload} className={style.img}/>):(<h2>insert img</h2>)}
      </div>
      {change!==-1&& imgupload && <>
            <EyeDropper onChange = {handlechange} cursorActive='crosshair'/></>}
      </div>
      <div className={style.list} >

      <ul ref={download}  >
            {
                colors.map((i,ind)=>{
                  return <>
                    <li key={ind} style={{backgroundColor:i}} className={style.button}>{i}
                    <button className={style.opacity} onClick={()=>setColors(colors.filter(c=>c!==i))}>{icon.del}</button>
                    
                    {change!==ind && <>
                    <button  className={style.opacity} onClick={()=>setChange(ind)}>{icon.edit}</button>
                    </> }
                    </li>
                    
                    </>
                })
            }
        </ul>
        <div className={style.download}>
          {colors.length && <Export action="export" destination="palette" colors={colors} />}
          <br/>
          {colors.length && <button  onClick={()=>exportComponentAsJPEG(download)}>{icon.download}download</button>}
        </div>
       
        
        </div>

    </div>
  )
}
