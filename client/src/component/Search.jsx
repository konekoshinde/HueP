import { hsvaToHex } from "@uiw/react-color";
import { useState } from "react";
import * as icon from "../styles/Icons"
import styles from "../styles/ImgPalette.module.css"

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
      <div style={{backgroundColor:current}}>.</div>
      <button onClick={()=>handleSearch()}> {icon.search}search</button>
      {afterFind.map((i,ind)=>
      <>
      <div > 

        <ul style={{display:'flex',gap:"50px"}}>
            <button onClick={()=>props.buttonRef1.current.updateColor(i)} className={styles.buttonClick}>set</button>
            <li key={ind} style={{display:'flex'}}> {i.map((c,ind1) =><li key={ind1} className={styles.button} style={{backgroundColor:c}}><div >{c}</div></li>)} </li>
            <br/>
        </ul>
        </div>
        </>)}
    </div>
  )
}
