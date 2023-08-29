import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from '../styles/Template.module.css'
import { hsvaToHslaString } from '@uiw/react-color';
function Card(color){
    return(
        <div className={styles.flexCol1} style={{backgroundColor:"white"}}>
        <CheckCircleIcon sx={{fontSize:"40px",color:color.color}}/>
        <h3>heading</h3>
        <p style={{color:color.color}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, magni.</p>
        </div>
    )
}
function CardCircle(color){
    return(<div className={styles.flexCol1} style={{backgroundColor:"white"}}>
    <div>
        <AccountCircleIcon sx={{fontSize:"40px",color:color.color}}/>
        <h3 >title</h3>
        <p style={{color:color.color}}>Lorem, ipsum.</p>
    </div>
    <div>
        <StarIcon/>
        <StarIcon/>
        <StarIcon/>
        <StarIcon/>
    </div>
    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, placeat obcaecati ut ex deleniti voluptates."</p>
    </div>)
}

export default function Template(props) {
    const colors=props.colors;
    
  return (
    <div className={styles.padding} style={{backgroundColor:colors[3],border:"10px solid white"}}>
    
    <div className={styles.flex} > 
        <h2 style={{color:colors[4],backgroundColor:"white"}}>subtitle</h2>
        <div>
            <Card color={colors[2]}/>
            <Card color={colors[2]}/>
            <Card color={colors[2]}/>
        </div>
    </div>
    
    <div className={styles.flex}>
        <h2 style={{color:colors[4],backgroundColor:"white"}}>testimonial</h2>
        <div >
        <CardCircle color={colors[1]}/>
        <CardCircle color={colors[1]}/>
        <CardCircle color={colors[1]}/>
        </div>
    </div>
    
    </div>
  )
}
