import React from 'react'
import Card from './Card'
import styles from '../App.module.css';

const CartItems = (props) => {



 return(
  <div className= {styles.card}>
     <img src = {props.image} />
     <h2>{props.title}</h2>
     <p>{props.price}</p>
     <p>{props.id}</p>
     <button className= {styles.button2}>-</button>
     <span>1</span>
     <button className = {styles.button2}>+</button>
     <button
     onClick={props.removeItem}
     data-value = {props.id}
     >Remove from cart</button>
    </div>
    
 ) 
}

export default CartItems