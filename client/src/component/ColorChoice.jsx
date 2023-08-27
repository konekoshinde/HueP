import {useState,createContext, useRef} from "react"
import { EditableInput, hexToHsva, hsvaToHex,Saturation,ShadeSlider,Hue,Alpha  } from '@uiw/react-color';
import { Palette } from "../pages/CustomPalette";
import { Harmony } from "../pages/Scheme";
import Search from "./Search";
import { Harmonies } from "../pages/SiteColor";
import {Gradient} from "../pages/GradientPalette";
import { Site } from "../pages/SiteColor";
import "../styles/AllPalette.css"

export const currentColor=createContext(null)


const ColorChoice=((props,ref)=> {
    const buttonRef1=useRef(null);
    const [hsva,setHsva]=useState({ h: 0, s: 100, v: 50, a: 1 });
    
    
    return (
        <div className="flex-normal">
        

        <div className="center">

            <div style={{backgroundColor:hsvaToHex(hsva)}}> .</div>
            <EditableInput label="Hex" value={hsvaToHex(hsva)}
            onChange={(e)=>{let h=hexToHsva(e.target.value);setHsva(h); }}/>
            

            <Saturation hsva={hsva} onChange={(newColor) => {setHsva({ ...hsva, ...newColor, a: hsva.a });}}/>
            <br/>
            <ShadeSlider hsva={hsva} onChange={(newShade) => {setHsva({ ...hsva, ...newShade });;
            }}/>
            <br/>
            <Hue hue={hsva.h} onChange={(newHue) => {setHsva({ ...hsva, ...newHue });}}
            />
            <br/>
            <Alpha hsva={hsva} onChange={(newAlpha) => {setHsva({ ...hsva, ...newAlpha });
            }}/> 
        </div>
        <div>

        <currentColor.Provider value={{hsva}}>
            {props.caller==="scheme" && <Harmony/>}
            {props.caller==="gradient" && <Gradient/>}
            {props.caller==="customPalette" && <>
                <Palette ref={buttonRef1} /> 
                <Search color={hsva} action ="find" destination="palette" buttonRef1={buttonRef1} /> 
            </>
            }
            {props.caller==="Site" && <>
                <Harmonies buttonRef1={buttonRef1}/>
                <Search color={hsva} action ="find" destination="site" buttonRef1={buttonRef1} />
                <Site ref={buttonRef1} />
            </>}
        </currentColor.Provider>
        </div>
    </div>
    )
    
})
export default ColorChoice
