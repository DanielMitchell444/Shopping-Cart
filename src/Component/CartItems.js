import React from 'react'
import Card from './Card'
import styles from '../App.module.css';
import { useState } from 'react';
import data from './data';

const CartItems = (props) => {

    const [count, setCount] = useState(1);
    
    const [total, setTotal] = useState(0)
        


 return(
  <div className= {styles.card2}>
     <img src = {props.image} />
     <h2>{props.title}</h2>
     <p>${props.price}</p>
     <p>{props.id}</p>
     <span>{count}</span>
     <button
     onClick={props.removeItem}
     data-value = {props.id}
     >Remove from cart</button>
    <div>
     {} 
    </div>
    </div>
    
 ) 
}

export default CartItems