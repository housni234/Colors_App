
import './App.css';

function Card (props) {

    const copied = () =>{
    console.log("copied")  
    }
    return( 
     <div onClick={() => { navigator.clipboard.writeText(props.color); copied() }} className="card" key={props.id} style={{ backgroundColor: props.color }}>
            {props.id}
            {props.name}
            {props.year}
            {props.color}
            {props.pantone_value}
        </div>)
}


export default Card;