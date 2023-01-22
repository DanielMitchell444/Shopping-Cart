import React from 'react'
import Card from './Card'
import styles from '../App.module.css';
import { useState } from 'react';
import data from './data';

const CartItems = (props) => {

    const [count, setCount] = useState(1);
    
    const [total, setTotal] = useState(0)

    const incrementNumber = () => {
        setCount((count) => count + 1 )
      }
      
      const decrementNumber = () => {
        setCount(count - 1); 
      }

      const addTotal = () => {
        let initialValue = 0;
        let prices = data.map(item => +item.price.slice(1)); 
        setTotal( prices.reduce((accumulator, current) => accumulator + current, initialValue)); 
       }
        


 return(
  <div className= {styles.card}>
     <img src = {props.image} />
     <h2>{props.title}</h2>
     <p>{props.price}</p>
     <p>{props.id}</p>
     <button className= {styles.button2}
     onClick = {decrementNumber}
     >-</button>
     <span>{count}</span>
     <button className = {styles.button2}
     onClick = {incrementNumber}
     >+</button>
     <button
     onClick={props.removeItem}
     data-value = {props.id}
     >Remove from cart</button>
    </div>
    
 ) 
}

export default CartItems