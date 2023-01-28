import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import Card from "./Card";
import Shopping from "./Shopping";
import styles from '../App.module.css'
import CartItems from "./CartItems";
import data from "./data";

const Cart = (props) => {
   
   const [results, showResults] = ('')
   
   const [count, setCount] = useState(1);



   const addTotal = () => { 
    
  
   }

  
     

 return(
 <div>
 <div className= {styles.content3}>
   {props.items.map(card => {
    return <CartItems 
    title = {card.name}
    image = {card.image}
    price = {card.price}
    removeItem = {() => props.removeItem(card)}
    incrementItem = {props.incrementItem}
    />  
   })}
    </div>
    <div>
    <hr></hr>
   <h1>Total: {props.items.reduce((accumulator, current) => accumulator + current.quantity * current.price, 0)}</h1>
   </div> 
    </div>
 )
}

export default Cart;