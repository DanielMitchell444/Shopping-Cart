import React, { useState } from "react";
import { json } from "react-router-dom";
import Card from "./Card";
import Shopping from "./Shopping";
import styles from '../App.module.css'
import CartItems from "./CartItems";
import data from "./data";

const Cart = (props) => {
 
   const [results, showResults] = ('')

   let initialValue = 0;
   
   const [count, setCount] = useState(1);
  
   const [total, setTotal] = useState(0)

   const addTotal = () => {
    let prices= data.map(item => +item.price.slice(1)); 
    const total = prices.reduce((accumulator, current) => accumulator + current.price, initialValue); 
    setTotal(total);
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
   <h1>Total: {() => addTotal()}</h1>
   </div> 
    </div>
 )
}

export default Cart;