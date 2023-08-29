import { AcUnitTwoTone,AccessAlarmTwoTone,AdbTwoTone,AddBoxTwoTone,ParkTwoTone, ThreeDRotation,Person2TwoTone,
  Face2TwoTone,
EditLocationAltTwoTone} from '@mui/icons-material';
import React from 'react';

import Template from './Template';

import styles from "../styles/Pictures.module.css"

function Quote(props) {
    
  return (
    <div className={styles.main}>
        <h1 className={styles.first} style={{color:props.colors[0]}}>Stay</h1>
        <h1 className={styles.second} style={{color:props.colors[3]}}>Captivated</h1>
        <h1 className={styles.third} style={{color:props.colors[4]}}>By Us</h1>
    </div>
  )
}
function Picture(props){
  const colors=props.colors;
  
  return <div style={{backgroundColor:colors[1],border:"25px solid #d4ecdb",borderRadius:"50px"}}>
    <div  style={{color:colors[2],display:'flex',gap:"35px",border:"2px solid black"}}><AcUnitTwoTone sx={{ fontSize: 70 }} /> <AccessAlarmTwoTone sx={{ fontSize: 70 }}/> <AdbTwoTone sx={{ fontSize: 70 }}/></div>
    <br/><br/><br/>
    <div   style={{color:colors[2],display:'flex',gap:"35px",border:"2px solid black"}}> <AddBoxTwoTone sx={{ fontSize: 70 }}/> <ParkTwoTone sx={{ fontSize: 70 }}/> <ThreeDRotation sx={{ fontSize: 70 }}/></div>
    <br/><br/><br/>
    <div  style={{color:colors[2],display:'flex',gap:"35px",border:"2px solid black"}} ><Person2TwoTone sx={{ fontSize: 70 }}/> <Face2TwoTone sx={{ fontSize: 70 }}/> <EditLocationAltTwoTone sx={{ fontSize: 70 }}/></div>
  </div>
}

export default function Pictures(props) {
    
  return (
    <>
    <div style={{display:"flex",flexDirection:"row",gap:"5%"}}>
        
      <Picture colors={props.colors}/>
      <br/>
      <Quote colors={props.colors}/>
      <br/>
    </div>
    <br/>
    <Template colors={props.colors}/>
    </>
  )
}

