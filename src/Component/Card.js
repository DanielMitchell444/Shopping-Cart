import React, { useState } from "react";
import styles from '../App.module.css'
import App from "../App";
import Cart from "./Cart";




const Card = (props) => {
  
    const [showResults, setShowResults] = useState('');

    return(
    <div className= {styles.card}>
     <img src = {props.image} />
     <h2>{props.title}</h2>
     <p>{props.price}</p>
     <p>{props.id}</p>
     <button
     onClick={props.addItem}
     data-value = {props.id}
     >Add To Cart</button>
    </div>
    )
}

export default Card;