import React, { useState } from "react";
import { json } from "react-router-dom";
import Card from "./Card";
import Shopping from "./Shopping";
import styles from '../App.module.css'
import CartItems from "./CartItems";

const Cart = (props) => {
 
   const [results, showResults] = ('')
   
   const [count, setCount] = useState(1);

   
  

const incrementNumber = () => {
  setCount((count) => count + 1 )
}

const decrementNumber = () => {
  setCount(count - 1); 
}
     

 return(
 <div className= {styles.content3}>
   {props.items.map(card => {
    return <CartItems 
    title = {card.name}
    image = {card.image}
    price = {card.price}
    onClick = {props.removeItem}
    />  
   })}
    <div>   
   </div> 
 </div>
 )
}

export default Cart;