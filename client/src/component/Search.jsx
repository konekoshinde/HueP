import { hsvaToHex } from "@uiw/react-color";
import { useState } from "react";
import * as icon from "../styles/Icons"
export default function Search(props) {
    const [afterFind,setAfterFind] = useState([]);
    const current=hsvaToHex(props.color);

    const handleSearch=async() =>{
      
        try {
            
            let action=props.action;
            const response = await fetch(`http://localhost:3000/${props.destination}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({current,action})
          });
    
          if (response.ok) {
            let data = await response.json();
            console.log(data)
    
            if(data.length!==0){
                let color=[];
                data.forEach((item) => {
                    let temp=[];
                    item.colors.forEach(i=>{
                      temp.push(i);
                    })
                    color.push(temp);
                    setAfterFind(color)
                  });
            }
            else{
                setAfterFind([]);
            }
            console.log("Data sent successfully");
          } else {
            console.error("Failed to send data");
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
        
    }
  return (
    <div>
      <button className="downloads" onClick={()=>handleSearch()}> {icon.search}search</button>
      {afterFind.map((i,ind)=>
        <ul className='flex-row'>
            <button onClick={()=>props.buttonRef1.current.updateColor(i)}>set as Palette</button>
            <li key={ind}> {i.map((c,ind1) =><><li key={ind1} className="button" style={{backgroundColor:c}}><div >{c}</div></li><br/></>)} </li>
            <br/>
        </ul>)}
    </div>
  )
}
