import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../styles/Template.module.css'

function Card(){
    return(
        <div className='flex-col1'>
        <CheckCircleIcon/>
        <h3 >heading</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, magni.</p>
        </div>
    )
}
function CardCircle(){
    return(<div className='flex-col1'>
    <div>
        <AccountCircleIcon/>
        <h3 >title</h3>
        <p>Lorem, ipsum.</p>
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
function Heading(){
    return (<div className='flex'>
        <h3 >heading</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, libero.</p>
    </div>)
}
export default function Template(props) {
    const colors=props.colors;

  return (
    <div className='padding' style={{backgroundColor:colors[4],color:colors[3]}}>
    <div>
      <h1 >Title</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quas.</p>
      <br/>
      <br/>
      <button className='button1' style={{backgroundColor:colors[2]}}>Button</button>
      <button className='button1' style={{backgroundColor:colors[2]}}>Button</button>
    </div>
    <div className='flex'>
        <h2 >subtitle</h2>
        <div>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
    <div className='reverse'>
        <p>Lorem ipsum dolor sit amet.</p>
        <div>
        <div className='reverse'>
            <Heading/>
            <Heading/>
        </div>
        <div className='reverse'>
            <Heading/>
            <Heading/>
        </div>
        </div>
    </div>
    <div className='flex'>
        <h2 >testimonial</h2>
        <div >
        <CardCircle/>
        <CardCircle/>
        <CardCircle/>
        </div>
    </div>
    <div>
            
            <ul className='reverse'>
                <li className='button'style={{backgroundColor:colors[2]}}>option1</li>
                <br/>
                <li className='button' style={{backgroundColor:colors[2]}}>option2</li>
                <br/>
                <li className='button' style={{backgroundColor:colors[2]}}>option3</li>
                <br/>
                <li className='button' style={{backgroundColor:colors[2]}}>option4</li>
            </ul>
        
    </div>
    </div>
  )
}
