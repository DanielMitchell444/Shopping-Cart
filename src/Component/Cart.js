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
  
   const [total, setTotal] = useState(0)



  
     

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
   <h1>Total: {total}</h1>
   <h2>quantity: {count}</h2>
   </div> 
    </div>
 )
}

export default Cart;