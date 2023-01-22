import React, { useState } from "react";
import { json } from "react-router-dom";
import Card from "./Card";
import Shopping from "./Shopping";
import styles from '../App.module.css'
import CartItems from "./CartItems";
import data from "./data";

const Cart = (props) => {
 
   const [results, showResults] = ('')
   
   const [count, setCount] = useState(1);

   const [total, setTotal] = useState(1)

   const addTotal = () => {
     
   let initialValue = 0;


   setTotal(total);


   const addTotal = () => {
    let initialValue = 0;
    setTotal( data.reduce((accumulator, current) => accumulator + current.price + current.price, initialValue)); 
   }
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
    total = {addTotal}
    />  
   })}
    </div>
    <div>
   <h1>Total: {addTotal}</h1>
   </div> 
    </div>
 )
}

export default Cart;