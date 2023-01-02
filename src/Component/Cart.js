import React, { useState } from "react";
import { json } from "react-router-dom";
import Card from "./Card";
import Shopping from "./Shopping";
import styles from '../App.module.css'

const Cart = (props) => {
 
   const [results, showResults] = ('')
   
   const [count, setCount] = useState(1);
  

const incrementNumber = () => {
  setCount(count + 1)
}

const decrementNumber = () => {
  setCount(count - 1); 
}
     

 return(
 <div className= {styles.content3}>
    {props.items.map(card => {
     return (
      <div className= {styles.content2}>
      <div className= {styles.card}>
       <img src = {card.image} />
       <h2>{card.name}</h2>
       <p>{card.price}</p>
       <button 
       className= {styles.button2}
       onClick = {decrementNumber}
       >-</button>
       <span>{count}</span>
       <button className= {styles.button2}
       onClick = {incrementNumber}
       >+</button>
       <button
       onClick = {() => {props.removeItem(card)}}
       >Remove Item</button> 
      </div>
      </div>
     )
    })}
    <div>   
   </div> 
 </div>

 )
}

export default Cart;