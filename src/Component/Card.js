import React, { useState } from "react";
import styles from '../App.module.css'




const Card = (props) => {
  
    const [showResults, setShowResults] = useState();

    return(
    <div className= {styles.card}>
     <img src = {props.image} />
     <h2>{props.title}</h2>
     <p>{props.price}</p>
     <p>{props.id}</p>
     <button
     onClick={props.onClick}
     data-value = {props.id}
     >Add To Cart</button>
     {showResults ? <Card /> : null}
     
    </div>
    )
}

export default Card;